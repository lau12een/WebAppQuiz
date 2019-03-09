//OBJECT

const questionsArray = [
    //Question 1
          {questionNum: 1,
          question: 'What type of disorder is Autism?',
          answerChoices: ['Learning', 'Personality', 'Mental','Developmental'],
          correctAnswer: 'Developmental',
          correctDetails: "Childhood disorders, often labeled as developmental disorders most often occur and are diagnosed when the child is of school-age. Although Austism is classified as a Developmental Disorder, a child with Autism can also have a Learning Disability .  "        
        }, 
        //Question 2
          {questionNum: 2,
          question: 'What is the cause of autism?',
          answerChoices: ['genetics', 'environment', 'both', 'none of the above'],
          correctAnswer: 'both',
          correctDetails: '"There’s no one cause of autism. Research suggests that autism develops from a combination of genetic and nongenetic, or environmental, influences"' 
        }, 
        //Question 3
          {questionNum: 3,
          question:  'What is the current (2018)  estimated prevalency rates of autism?',
          answerChoices: ['1 in 166 children', '3 in 4 children', '1 in 59 children','1 in 68 children'],
          correctAnswer:  '1 in 59 children',
          correctDetails: 'The new estimate represents a 15 percent increase in prevalence nationally: to 1 in 59 children, from 1 in 68 two years previous'
        }, 
    
        //Question 4
          {questionNum: 4,
          question:  ' Gender-wise, what is the prevalency rate of boys compared to girls?',
          answerChoices: ['Boys are 4 times more likely to be diagnosed with autism than girls', 'Boys are 7 times more likely to be diagnosed with autism than girls', 'Boys are twice as likely to be diagnosed with autism than girls','There is no difference in prevalency between boys and girls '],
          correctAnswer: 'Boys are 4 times more likely to be diagnosed with autism than girls',
          correctDetails: 'The gender gap in autism has decreased. While boys were 4 times more likely to be diagnosed than girls (1 in 37 versus 1 in 151) in 2014, the difference was narrower than in 2012, when boys were 4.5 times more frequently diagnosed than girls. '
        }, 
    
        //Question 5
          {questionNum: 5,
          question: ' Which condition is also on the spectrum of disorders',
          answerChoices: ['Obsessive Compulsive Disorder', 'Narissistic Personality Disorder', ' Aspergers Syndrome','All of the above'],
          correctAnswer: ' Aspergers Syndrome',
          correctDetails: 'it is now identified as one umbrella diagnosis of autism spectrum disorder (ASD) in the Diagnostic and Statistical Manual of Mental Disorders 5 (DSM-5) '
        }, 
    
        //Question 6
          {questionNum: 6,
          question: 'When autism was first discovered , what were the reasons for autism?',
          answerChoices: ['"Bad mothers"', ' Economic status', 'hygeine','brainwashing by government'],
          correctAnswer: '"Bad mothers"',
          correctDetails: 'Refrigerator mother" theory is a discarded theory that autism is caused by a lack of maternal warmth. Current research indicates that a combination of genetic and environmental factors predominate in the cause of autism'
        }, 
       //Question 7 
          {questionNum: 7,
          question: 'When is the earliest time to seek a diagnosis for autism?',
          answerChoices: ['age 1', 'age 2', 'ages 4','age 11'],
          correctAnswer: 'age 2',
          correctDetails: "Although 2 is recorded as the earliest age for a child to be diagnosed with Austism. Studies demonstrate that behavioral signs can begin to emerge as early as 6 to 12 months. However, most professionals who specialize in diagnosing the disorder won't attempt to make a definite diagnosis until 18 months"
        }, 
        //Question 8
          {questionNum: 8, 
          question: 'Which socioeconomic group does Autism affect?',
          answerChoices: ['Upper Class', 'Middle Class ','Lower Middle Class','Autism affects all of these groups '],
          correctAnswer: 'Autism affects all of these groups ',
          correctDetails: 'Although childen from different economic groups can be affected by autism. Children living in neighborhoods where incomes are low and fewer adults have bachelor’s degrees are less likely to be diagnosed with autism spectrum disorder due to lack of access to profressionals who are able to make such a diagnosis'
        }, 
        //Question 9
          {questionNum: 9, 
          question: 'What are associated Medical and Mental Health Conditions of Autism',
          answerChoices: ['Gastrointestinal Disorders', 'Anxiety', 'All of these','ADHD'],
          correctAnswer: 'All of these',
          correctDetails: 'The medical condition of autism include seizures, gastrointestinal disorders or distress, eating or feeding problems, and sleep disturbances. The mental health condition of autism includes anxiety, depression, attention deficit and hyperactivity disorder schizophrenia and bipolar disorder '
        }, 
        //Question 10
          {questionNum: 10,
          question: 'What is the most common intervention for autism?',
          answerChoices: ['Hypno Therapy','Occupational Therapy','Speech Therapy',' Applied Behavior Analysis'],
          correctAnswer: ' Applied Behavior Analysis',
          correctDetails: 'Therapists have used ABA to help children with autism and related developmental disorders since the 1960s'
        }
       /* //Question 11
          {questionNum: 10,
          question: 'What is the most common intervention for autism?',
          answerChoices: ['Hypno Therapy','Occupational Therapy','Speech Therapy',' Applied Behavior Analysis'],
          correctAnswer: ' Applied Behavior Analysis',
          correctDetails: 'Therapists have used ABA to help children with autism and related developmental disorders since the 1960s'
        }*/ 
      ];
      
    let currentQuestion = 0;
    
    /*Start Here */
    
    function startQuizAtStart() {
      // Starts quiz, enables the submit button, and hides start page
      $('#intro-page').on('click', '.button', event => {
        $('#intro-page').addClass('hidden');
        $('#question-page').removeClass('hidden');
        $('#submit-answer').removeClass('hidden');
      });
    }
    
    function renderQuestions() {
      // populates questions and answers from array of questions and answers
      let answer1 = `${questionsArray[currentQuestion].answerChoices[0]}`;
      let answer2 = `${questionsArray[currentQuestion].answerChoices[1]}`;
      let answer3 = `${questionsArray[currentQuestion].answerChoices[2]}`;
      let answer4 = `${questionsArray[currentQuestion].answerChoices[3]}`;
      let questionText = `<legend>${currentQuestion+1}/10: ${questionsArray[currentQuestion].question}<legend>`;
      let answersText = 
      `<input type='radio' name='option' class='radio-buttons' id='answer1' value='${answer1}'><label for='answer1'>${answer1}</label><br>
      <input type='radio' name='option' class='radio-buttons' id='answer2' value='${answer2}'><label for='answer2'>${answer2}</label><br>
      <input type='radio' name='option' class='radio-buttons' id='answer3' value='${answer3}'><label for='answer3'>${answer3}</label><br>
      <input type='radio' name='option' class='radio-buttons' id='answer4' value='${answer4}'><label for='answer4'>${answer4}</label><br>`;
      $('.autism-question').html(questionText);
      $('.autism-answers').html(answersText);
      enableSubmitButton();
    }
    
    
    function enableSubmitButton() {
      // restores submit button after it has been disabled
      $('input[name=option]').on('click', function(event) {
        $('#submit-answer').removeClass('disabled').removeAttr('disabled');
      });
    }
        
    function submitQuizAnswer() {
      // submits selected answer, disables radio buttons
      $('#submit-answer').click(function(event) {
        event.preventDefault();
        evaluateAnswers();
        $('#submit-answer').addClass('hidden');
        $('#next-question').removeClass('hidden');
        $('input[type=radio]').attr('disabled', true);
      });
    }
    
    let userScore = {
      correct: 0,
      incorrect: 0,
    };
    
    function evaluateAnswers() {
      //checks for the correct answer and displays results along with  correct answer, giphy, details and updated score
      let userAnswer = $('input[name=option]:checked').val()
      ;
      if (userAnswer === questionsArray[currentQuestion].correctAnswer) {
        userScore.correct++;
         $('#feedbackcorrect').removeClass('hidden');
        let popupAnswerText = `<h3><br>
       <iframe src='https://giphy.com/embed/l378n6YCnm8qIwr8A' /> <br>You're Rock'n It! The answer is 
          ${questionsArray[currentQuestion].correctAnswer}.<br>
          ${questionsArray[currentQuestion].correctDetails}.</h3><br>`;
          $('#feedbackcorrect').html(popupAnswerText);
    
      
      } else {
        userScore.incorrect++;
        getCorrectAnswer();
        $('#feedbackincorrect').removeClass('hidden');
    
        
      }
      $('.results-counter').html(`<p>Correct: ${userScore.correct} | Incorrect: ${userScore.incorrect}</p>`);
    }  
      
    function getCorrectAnswer() {
      //when answer is wrong, shows the right answer
      let popupAnswerText = `<h3><br>
      <iframe src='https://giphy.com/embed/15aGGXfSlat2dP6ohs' /><br>It's actually: 
      ${questionsArray[currentQuestion].correctAnswer}.<br>
      ${questionsArray[currentQuestion].correctDetails}.</h3><br>`;
     $('#feedbackincorrect').html(popupAnswerText);

    } 
    
    
    // show the same thing in success
          
    function nextQuestion() {
      // advances user to the next question or show final score depending on current question 
      $('#next-question').on('click', function(event) {
        if (currentQuestion < questionsArray.length-1) {
          currentQuestion++;
          renderQuestions();
          resetQuestion();
        } else {
          showFinalScore();
        } 
      });
    }
    
    function resetQuestion() {
      // resets question and answers, and swaps out previous questions, answers and buttons
      $('input[type=radio]').attr('disabled', false);
      $('#next-question').addClass('hidden');
      $('#submit-answer').removeClass('hidden');
      $('#feedbackcorrect').addClass('hidden');
      $('#feedbackincorrect').addClass('hidden');
      $('#submit-answer').addClass('disabled');
      $('#submit-answer').attr('disabled', 'disabled');
    }
    
    function showFinalScore() {
      // hides the  submit button and displays final page with final score
          $('#submit-answer').addClass('hidden');
          $('#final-page').removeClass('hidden');
          $('#question-page').addClass('hidden');
          let finalScoreText = `<h3>You answered ${userScore.correct} out of 10 questions correctly!</h3>`;
          $('#final-correct').append(finalScoreText);
      }
    
    function restartQuiz() {
      // takes user back introduction page once they click appropriate button
      $('#retake').click(function() {
        location.reload();
      });
    }
    
    function handleQuizFunctions() {
      startQuizAtStart();
      renderQuestions();
      submitQuizAnswer();
      nextQuestion();
      restartQuiz();
      enableSubmitButton();
    }
    
    //invoke
    $(handleQuizFunctions);
    