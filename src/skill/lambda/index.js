/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = "Sure, I'd be happy to help you practice your spoken English skills. Here's a question for you: What is your favorite way to practice your English skills outside of these sessions?";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


// SIMULATED intents


const Response1IntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'responseOne';
    },
    handle(handlerInput) {
        const speakOutput = "That's great to hear! Speaking with friends on Discord is an excellent way to practice your English skills. Have you ever tried watching English movies or TV shows, or reading English books or articles? Those are also great ways to improve your language skills. What kind of topics do you usually discuss with your friends on Discord?";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};



const Response2IntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'responseTwo';
    },
    handle(handlerInput) {
        const speakOutput = "That sounds like a fun topic to discuss! Speaking about something you enjoy can make practicing your English skills more engaging and enjoyable. When you talk about video games with your friends on Discord, do you usually speak in English or your native language? If you typically speak in your native language, it could be a good idea to try switching to English during some conversations to practice using the language in a more natural way. Have you ever tried that?";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const Response3IntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'responseThree';
    },
    handle(handlerInput) {
        const speakOutput = "That's great to hear! Trying to speak more English during your conversations with your friends on Discord could be a fun and effective way to practice your language skills. You can start by trying to incorporate a few English phrases or words into your discussions and gradually increase your usage over time. Additionally, you can look for English-speaking communities on Discord that are focused on the video games you enjoy playing. This will give you an opportunity to practice speaking English with others who share your interests. Have you ever considered joining an English-speaking gaming community on Discord?";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};



const Response4IntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'responseFour';
    },
    handle(handlerInput) {
        const speakOutput = "It's understandable to feel a bit nervous or shy about joining a new community and speaking in a language you're still learning. However, remember that everyone in the community is there because they share the same interests and passion for the game. They will likely be supportive and understanding of language learners who want to practice their English skills. You can start by simply introducing yourself and letting them know that you're still learning the language. You might be surprised at how welcoming and encouraging the community can be. Would you be willing to give it a try?";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const Response5IntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'responseFive';
    },
    handle(handlerInput) {
        const speakOutput = "That's totally understandable. Joining a new community can be intimidating at first, but remember that taking small steps can lead to big progress over time. You can start by searching for English-speaking communities that focus on the games you enjoy playing, and simply observe how they communicate with each other. Gradually, you can start to participate more by asking questions, sharing your thoughts and experiences, and engaging in conversations. Remember that practicing your English skills is a journey, and every step counts towards your progress. Do you have any other questions about practicing your English skills?";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};



const Response6IntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'responseSix';
    },
    handle(handlerInput) {
        const speakOutput = "Of course! Please feel free to suggest another topic, and I'll do my best to assist you and provide any corrections or feedback on your English.";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};



const Response7IntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'responseSeven';
    },
    handle(handlerInput) {
        const speakOutput = "I can tell you that Overwatch is a popular team-based multiplayer first-person shooter game that has gained a large following since its release in 2016. The game has a diverse cast of characters, each with their own unique abilities and playstyles, which adds to its appeal. The game requires strong teamwork, strategy, and communication, which can make it an exciting and challenging game to play. Have you played Overwatch before?";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};



const Response8IntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'responseEight';
    },
    handle(handlerInput) {
        const speakOutput = "That's great to hear! Playing with friends can make Overwatch even more enjoyable and help improve your communication and teamwork skills. Overwatch can be a great way to practice your English skills too, especially if you play with English-speaking teammates. You can practice using English phrases related to the game, such as calling out enemy locations or requesting assistance from your team. Additionally, you can try watching English-language videos or streams of professional Overwatch players to learn new strategies and techniques. Have you ever tried watching or listening to English content related to Overwatch?";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};



const Response9IntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'responseNine';
    },
    handle(handlerInput) {
        const speakOutput = "Sure, no problem! It was great talking with you and helping you practice your English skills. If you have any more questions in the future, don't hesitate to reach out. Goodbye and take care!";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const ResponseRetroIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ResponseRetro';
    },
    handle(handlerInput) {
        const speakOutput = "The quality of the conversation generated has a score of 35. Not bad! You seem to have mastered keeping a conversation flowing - would you like to increase your score and try a new conversation?";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const Response10IntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'responseTen';
    },
    handle(handlerInput) {
        const speakOutput = "Okay, see you";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};





// SIMULATED INTENTS



















const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        Response1IntentHandler,
        Response2IntentHandler,
        Response3IntentHandler,
        Response4IntentHandler,
        Response5IntentHandler,
        Response6IntentHandler,
        Response7IntentHandler,
        Response8IntentHandler,
        Response9IntentHandler,
        ResponseRetroIntentHandler,
        Response10IntentHandler,
        
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();