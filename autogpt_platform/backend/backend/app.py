import logging
from pathlib import Path
from typing import TYPE_CHECKING

logger = logging.getLogger(__name__)

try:
    from dotenv import load_dotenv  # type: ignore

    _HAVE_DOTENV = True
except Exception:  # pragma: no cover - we fallback gracefully
    _HAVE_DOTENV = False


def _load_env() -> None:
    """Load a .env if python-dotenv is available; try common locations."""
    if not _HAVE_DOTENV:
        logger.debug("python-dotenv not installed; skipping .env load")
        return
    candidates = [
        Path(__file__).resolve().parents[2] / ".env",  # repo root/.env
        Path(__file__).resolve().parents[1] / ".env",  # backend/.env
        Path.cwd() / ".env",  # current working dir
    ]
    for p in candidates:
        if p.exists():
            load_dotenv(p, override=False)
            logger.info("Loaded environment from %s", p)
            break


_load_env()

if TYPE_CHECKING:
    from backend.util.process import AppProcess


def run_processes(*processes: "AppProcess", **kwargs):
    """
    Execute all processes in the app. The last process is run in the foreground.
    Includes enhanced error handling and process lifecycle management.
    """
    try:
        # Run all processes except the last one in the background.
        for process in processes[:-1]:
            process.start(background=True, **kwargs)

        # Run the last process in the foreground.
        processes[-1].start(background=False, **kwargs)
    finally:
        for process in processes:
            try:
                process.stop()
            except Exception as e:
                logger.exception(f"[{process.service_name}] unable to stop: {e}")


def main(**kwargs):
    """
    Run all the processes required for the AutoGPT-server (REST and WebSocket APIs).
    """

    from backend.executor import DatabaseManager, ExecutionManager, Scheduler
    from backend.notifications import NotificationManager
    from backend.server.rest_api import AgentServer
    from backend.server.ws_api import WebsocketServer

    run_processes(
        DatabaseManager().set_log_level("warning"),
        Scheduler(),
        NotificationManager(),
        WebsocketServer(),
        AgentServer(),
        ExecutionManager(),
        **kwargs,
    )


if __name__ == "__main__":
    main()
