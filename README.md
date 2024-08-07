# Important: Notice about the UI redesign

On August 6th, 2024, reblogme went live with a UI redesign. As usually happens when services do this, they've released it extremely half-assed, excluding a bunch of features that existed prior to the redesign. This includes the queue, which is now entirely gone from the UI. Additionally, they've completely broken the login page on Firefox Desktop.

Hopefully they will add the queue back at some point, in a functional state, rendering this project unnecessary. As it stands, however, this project cannot be used with the new reblogme, since there is no queue, and logins are currently impossible on FF desktop. 

The original readme is preserved below.

----

# reblogme-local-queue

Reblogme.com, a Tumblr clone, has a broken queue system. It'll let you fill the queue with posts, but will never actually post according to your set schedule. With `reblogme-local-queue`, you can automate the queue and run it from your computer with Node.js, Selenium, and Cron or Windows Task Scheduler.

# How to use

1. Install [Firefox](https://getfirefox.com)
1. Install [Node.js](https://nodejs.org/en)
1. Install [Selenium WebDriver](https://www.npmjs.com/package/selenium-webdriver)
1. Install [geckodriver](https://github.com/mozilla/geckodriver/releases/)
1. Move geckodriver(.exe) into your `PATH` (e.g. `/usr/bin` or `C:\windows\system32`)
1. Clone/download this repository
1. Create `credentials.json` in the repository root directory, and populate it with the following: 
    ```
    {
        "email": "your-email@example.com",
        "password": "your reblogme password"
    }
    ```
1. Run the project with `node index.js`

Whenever the project is run, it logs into your reblogme profile in a headless (invisible) browser, navigates to the queue, clicks "Publish" on the top entry in the queue, then exits. 

# Scheduling

## Linux
In order for this to happen on a schedule, add it to your crontab and set the schedule there:

```$ crontab -e```

Append the following to the end of the file:

```0 */8 * * * /usr/local/bin/node /opt/reblogme-local-queue/index.js```

Change the last argument to match where you placed the repository. `0 */8 * * *` in this context means *every eight hours* at minute 0, any day of the month, any month, any day of the week. Set `*/8` to any number you wish to adjust the posting frequency. You can also check out [crontab.guru](https://crontab.guru/) to learn more about cron scheduling and how to format the cron schedule expression.

## Windows

You can use [Task Scheduler](https://www.windowscentral.com/how-create-automated-task-using-task-scheduler-windows-10) to run this according to your chosen schedule. In the "Program/script" field, put the path to Node (presumably node.exe), and in the "Add arguments (optional)" or "Arguments" field, put the path to `index.js` in the cloned respository.