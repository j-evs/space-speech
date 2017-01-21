//King "I have a dream" speech
import MLKSpeech from './media/King_IHaveADream/King_IHaveADream__speech.mp3';
import MLKPic1 from './media/King_IHaveADream/King_IHaveADream__pic1.jpg';
import MLKPic2 from './media/King_IHaveADream/King_IHaveADream__pic2.jpg';
import MLKPic3 from './media/King_IHaveADream/King_IHaveADream__pic3.jpg';
import MLKPic4 from './media/King_IHaveADream/King_IHaveADream__pic4.jpg';
import MLKIcon from './media/img/fist.svg';

//Raegan "Challenger" speech
import ChallengerSpeech from './media/Raegan_Challenger/Raegan_Challenger__speech.mp3';
import ChallengerPic1 from './media/Raegan_Challenger/Raegan_Challenger__pic1.jpg';
import ChallengerPic2 from './media/Raegan_Challenger/Raegan_Challenger__pic2.jpg';
import ChallengerPic3 from './media/Raegan_Challenger/Raegan_Challenger__pic3.jpg';
import ChallengerPic4 from './media/Raegan_Challenger/Raegan_Challenger__pic4.jpg';
import ChallengerIcon from './media/img/Shuttle.svg';

//Kennedy "We choose to go to the Moon" speech
import MoonSpeech from './media/Kennedy_Moon/Kennedy_Moon__speech.mp3';
import MoonPic1 from './media/Kennedy_Moon/Kennedy_Moon__pic1.jpg';
import MoonPic2 from './media/Kennedy_Moon/Kennedy_Moon__pic2.jpg';
import MoonPic3 from './media/Kennedy_Moon/Kennedy_Moon__pic3.jpg';
import MoonPic4 from './media/Kennedy_Moon/Kennedy_Moon__pic4.jpg';
import MoonIcon from './media/img/Moon.svg';

const fakeDatabase = {
    MLK: {
        audioSrc: MLKSpeech,
        previewIcon: MLKIcon,
        description: '"I Have a Dream" is a public speech delivered by American civil rights activist Martin Luther King Jr. during the March on Washington for Jobs and Freedom on August 28, 1963, in which he calls for an end to racism in the United States and called for civil and economic rights. Delivered to over 250,000 civil rights supporters from the steps of the Lincoln Memorial in Washington, D.C., the speech was a defining moment of the American Civil Rights Movement.[2]',
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
    Challenger: {
        audioSrc: ChallengerSpeech,
        previewIcon: ChallengerIcon,
        description: 'On January 28, 1986, the American shuttle orbiter Challenger broke up 73 seconds after liftoff, bringing a devastating end to the spacecraft’s 10th mission. The disaster claimed the lives of all seven astronauts aboard. President Reagan delivered a nationwide speech following the Space Shuttle Challenger disaster ',
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
    Moon: {
        audioSrc: MoonSpeech,
        previewIcon: MoonIcon,
        description: 'The "Address at Rice University on the Nation\'s Space Effort", or better known simply as the "We choose to go to the moon" speech, was delivered by U.S. President John F. Kennedy in front of a large crowd gathered at Rice Stadium in Houston, Texas on September 12, 1962. It was one of Kennedy\'s earlier speeches meant to persuade the American people to support the national effort to land a man on the Moon and return him safely to the Earth.',
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
};

const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}


export function fetchSpeechData() {
    return delay(5000).then(() => {
        return fakeDatabase;
    });
}
