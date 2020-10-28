# Tandem-Code-Challenge

- [Project Planning](#Project-Planning)
  - [Description](#Description)
  - [MVP](#MVP)
    - [MVP Libraries & Dependencies](#MVP-Libraries--Dependencies)
    - [MVP Breakdown](#MVP-Breakdown)
    - [MVP Timeframes](#MVP-Timeframes)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Project Planning

> The Project Planning section should be completed for your project pitch with instructors.
>
> To ensure correct Markdown, I recommend cloning this wiki and copy/pasting the raw template code.

<br>

### Description

_**Tandem Quiz** is a one player React based quiz app, that test users knowledge with 10 random questions, and final score computation at the end._

<br>

#### MVP Goals

- Randomize answers
- Track score
- Show correct answers
<br>


#### MVP Libraries & Dependencies

> Use this section to list the key supporting libraries and their role in the project.

|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|  React Hooks  | For easy state manipulation |
| React Bootstrap | For easy styling|
| React Countup | Fun score count up display|

<br>


#### MVP Breakdown

> Use this section to go into further depth regarding every component, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   functional    |   y   |   n   |   y   | _Carries the sate of the application._ |
|    Query    | functional |   n   |   y   |   n   | _Query component holds the question box_ |


<br>

#### MVP Timeframes

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Render Questions |    H    |     1 hrs      |     .5 hrs     |    .5 hrs    |
| Render Answers      |    H     |     1 hrs      |     .5 hrs     |     .5 hrs     |
| Randomize Answers      |    H     |     1 hrs      |     1 hrs     |     1 hrs     |
| Track Score      |    H     |     1 hrs      |     .5 hrs     |     .5 hrs     |
| Show Answers     |    H     |     1 hrs      |     1 hrs     |     1 hrs     |
| TOTAL            |          |     5 hrs      |     3.5 hrs     |     3.5 hrs     |

<br>


### Code Showcase

useEffect(() => {
    const data = Data;
    // setQuestions(data);
    const questions = data.map((question) => 
      ({
        ...question,
        answers: [
          question.correct,
          ...question.incorrect
        ].sort(() => Math.random() - 0.5)
      }))
    setQuestions(questions)
  }, [])

### Code Issues & Resolutions

> One main issue I dealt with was randomizing the answers to each question. My initial plan was to shuffle the answers in the query component. However, this caused the answers to rerender anytime a answer is chosen, which in turn casued the answers to shuffle again. This cause a weird user experience during the game. The solution was randomizing the answers as the render on to the page. 
