#Questionnaire App Frontend in React

A questionnaire frontend system supporting the display of questionnaires, answering a set of questions from the chosen questionnaire.
Must be used alongside the pair backend app.


## 1. Important Note
1.Make sure `PostgreSQL 11.x` is installed in your system, and in `settings.py` within `project` folder, change the `DATABASE` key accordingly.

2.If you're launching the backend app in address other than `localhost` and/or ports other than port `8000`:

In `src/environments.js`, change the frontend server address accordingly.

3.If you're launching this server app in address other than `localhost:3000`, then refer to `README` in backend app
for other changes.

## 2. Instructions to run:
1. Install dependencies according to pipfile
2. Run `npm start` from root folder.