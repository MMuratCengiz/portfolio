import os
import subprocess
import sys
import signal

DETACHED_PROCESS = 0x00000008
processes = []


def signal_handler(sig, frame):
    for p in processes:
        os.kill(p.pid, signal.SIGINT)
    sys.exit(0)


def main():
    for f in os.listdir("resources/scss/"):
        sass_watch("resources/scss/" + f)
    signal.signal(signal.SIGINT, signal_handler)
    print("press Ctrl-C to exit")
    signal.pause()


def sass_watch(f):
    if os.path.isfile(f):
        path_no_ext = os.path.splitext(f)
        f_name = os.path.basename(path_no_ext[0])
        p = subprocess.Popen(["sass", "--watch", f, "resources/css/" + f_name + ".css"])
        processes.append(p)


if __name__ == "__main__":
    main()
