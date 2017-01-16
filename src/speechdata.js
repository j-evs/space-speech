//MLK "I have a dream" speech
import MLKSpeech from './media/King_IHaveADream/King_IHaveADream__speech.mp3';
import MLKPic1 from './media/King_IHaveADream/King_IHaveADream__pic1.jpg';
import MLKPic2 from './media/King_IHaveADream/King_IHaveADream__pic2.jpg';
import MLKPic3 from './media/King_IHaveADream/King_IHaveADream__pic3.jpg';
import MLKPic4 from './media/King_IHaveADream/King_IHaveADream__pic4.jpg';

//Raegan "Challenger" speech
import ChallengerSpeech from './media/Raegan_Challenger/Raegan_Challenger__speech.mp3';
import ChallengerPic1 from './media/Raegan_Challenger/Raegan_Challenger__pic1.jpg';
import ChallengerPic2 from './media/Raegan_Challenger/Raegan_Challenger__pic2.jpg';
import ChallengerPic3 from './media/Raegan_Challenger/Raegan_Challenger__pic3.jpg';
import ChallengerPic4 from './media/Raegan_Challenger/Raegan_Challenger__pic4.jpg';

//Kennedy "We choose to go to the Moon" speech
import MoonSpeech from './media/Kennedy_Moon/Kennedy_Moon__speech.mp3';
import MoonPic1 from './media/Kennedy_Moon/Kennedy_Moon__pic1.jpg';
import MoonPic2 from './media/Kennedy_Moon/Kennedy_Moon__pic2.jpg';
import MoonPic3 from './media/Kennedy_Moon/Kennedy_Moon__pic3.jpg';
import MoonPic4 from './media/Kennedy_Moon/Kennedy_Moon__pic4.jpg';

const speeches = {
    'MLK': {
        audioSrc: MLKSpeech,
        iconSrc: './path/to/icon',
        description: 'Famous MLK speech',
        info: [
            {
                picture: MLKPic1,
                description: '„Our lives begin to end the day we become silent about things that matter“'
            },
            {
                picture: MLKPic2,
                description: '„We will not be satisfied until justice rolls down like waters and righteousness like a mighty stream“'
            },
            {
                picture: MLKPic3,
                description: '„Let us not seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred“'
            },
            {
                picture: MLKPic4,
                description: '„With this faith we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood.“'
            }
        ]
    },
    'Challenger': {
        audioSrc: ChallengerSpeech,
        iconSrc: './path/to/icon',
        description: 'Famous Challenger speech',
        info: [
            {
                picture: ChallengerPic1,
                description: '„The crew of the space shuttle Challenger honoured us by the manner in which they lived their lives. We will never forget them, nor the last time we saw them, this morning, as they prepared for the journey and waved goodbye and \'slipped the surly bonds of earth\' to \'touch the face of God.\'“'

            },
            {
                picture: ChallengerPic2,
                description: '„Your loved ones were daring and brave, and they had that special grace, that special spirit that says, \'Give me a challenge and I\'ll meet it with joy.\' They had a hunger to explore the universe and discover its truths“'
            },
            {
                picture: ChallengerPic3,
                description: '„I know it is hard to understand, but sometimes painful things like this happen. It\'s all part of the process of exploration and discovery“'
            },
            {
                picture: ChallengerPic4,
                description: '„The future doesn\'t belong to the fainthearted; it belongs to the brave“'
            }
        ]
    },
    'Moon': {
        audioSrc: MoonSpeech,
        iconSrc: './path/to/icon',
        description: 'Famous Moon speech',
        info: [
            {
                picture: MoonPic1,
                description: '„We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard“'
            },
            {
                picture: MoonPic2,
                description: '„This country was conquered by those who moved forward--and so will space'
            },
            {
                picture: MoonPic3,
                description: '„Yet the vows of this Nation can only be fulfilled if we in this Nation are first, and, therefore, we intend to be first. In short, our leadership in science and in industry, our hopes for peace and security, our obligations to ourselves as well as others, all require us to make this effort, to solve these mysteries, to solve them for the good of all men, and to become the world\'s leading space-faring nation“'
            },
            {
                picture: MoonPic4,
                description: '„We set sail on this new sea because there is new knowledge to be gained, and new rights to be won, and they must be won and used for the progress of all people“'
            }
        ]
    }
}

const getSpeechList = (speeches) => {
    return Object.keys(speeches);
}

export default const availableSpeeches = {
    'speechList': getSpeechList,
    'speeches': speeches
};
