# reblogme-local-queue

Reblogme.com, a Tumblr clone, has a broken queue system. It'll let you fill the queue with posts, but will never actually post according to your set schedule. With `reblogme-local-queue`, you can automate the queue and run it from your computer with Node.js, Selenium and Cron.

# How to use

1. Install [Firefox](https://getfirefox.com)
1. Install [Node.js](https://nodejs.org/en)
1. Install [Selenium WebDriver](https://www.npmjs.com/package/selenium-webdriver)
1. Install [geckodriver](https://github.com/mozilla/geckodriver/releases/)
1. Move geckodriver into your `PATH` (e.g. /usr/bin)
1. Clone this repository
1. Create `credentials.json` in the repository root directory, and populate it with the following: 
    ```
    {
        "email": "your-email@example.com",
        "password": "your reblogme password"
    }
    ```
1. Run the project with `node index.js`

Whenever the project is run, it logs into your reblogme profile in a headless (invisible) browser, navigates to the queue, clicks "Publish" on the top entry in the queue, then exits. In order for this to happen on a schedule, add it to your crontab and set the schedule there:

```$ crontab -e```

Append the following to the end of the file:

```0 */8 * * * /usr/local/bin/node /opt/reblogme-local-queue/index.js```

Change the last argument to match where you placed the repository. `0 */8 * * *` in this context means *every eight hours* at minute 0, any day of the month, any month, any day of the week. Set `*/8` to any number you wish to adjust the posting frequency. You can also check out [crontab.guru](https://crontab.guru/) to learn more about cron scheduling and how to format the cron schedule expression.