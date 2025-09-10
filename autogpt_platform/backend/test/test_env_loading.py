import importlib


def test_dotenv_importable() -> None:
    assert importlib.util.find_spec("dotenv") is not None
