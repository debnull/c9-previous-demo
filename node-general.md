# General information for running node in c9.io

## Not terminating process / My server won't stop running

Sometimes a node process does not stop, even if the cloud9 IDE thinks it has already.
When this happens, you can easily find that process via **console**.
Use `ps -ef` and find the **PID** of the node related process you want to kill.
Then use `kill -9 PID` to terminate that guy.