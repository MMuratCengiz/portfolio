import os
import subprocess
import sys
import signal

DETACHED_PROCESS = 0x00000008
processes = []


def kill():
    for p in processes:
        os.kill(p.pid, signal.SIGINT)
    sys.exit(0)


def signal_handler(sig, frame):
    kill()


def main():
    for f in os.listdir("app/src/scss/"):
        sass_watch("app/src/scss/" + f)
    signal.signal(signal.SIGINT, signal_handler)
    input("Press any key to exit\r\n\r\n")
    kill()


def sass_watch(f):
    if os.path.isfile(f):
        path_no_ext = os.path.splitext(f)
        f_name = os.path.basename(path_no_ext[0])
        p = subprocess.Popen(["sass", "--watch", f, "app/src/css/" + f_name + ".css"])
        processes.append(p)


if __name__ == "__main__":
    main()
