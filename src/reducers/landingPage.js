import step1 from '../assets/images/step1.png';
import step2 from '../assets/images/step2.png';
import step3 from '../assets/images/step3.png';
import step4 from '../assets/images/step4.png';
import step5 from '../assets/images/step5.png';
import person1 from '../assets/images/person1.jpg';
import person2 from '../assets/images/person2.jpeg';
import person3 from '../assets/images/person3.jpg';

const initialState={
    relaOne: 'RelaOne',
    relaOneOrganization: 'RelaOne for Organization',
    introTitle: 'What is RelaOne?',
    introParagraph1: 'is an application that makes it easy to find activities that best suit the interests and abilities of volunteers.',
    introParagraph2: 'is a services for organization or community that facilitate the seach of volunteers.',
    activeIndex: 0,
    howToJoin: [
        {
          src : step1,
          title : 'Register',
          altText: 'step 1',
          caption: 'Join RelaOne to be part of volunteer activities. Sign Up!'
        },
        {
          src: step2,
          title : 'Complete your profile',
          altText: 'step 2',
          caption: 'Complete your profile to find activity that suit you best.'
        },
        {
          src: step3,
          title : 'Find activity',
          altText: 'step 3',
          caption: 'RelaOne will recommend activity that suit your profile. Want more? You can find other activities!'
        },
        {
          src: step4,
          title : 'Join',
          altText: 'step 4',
          caption: 'Just click "Join" and fill some requirements, and you have got chance to contribute'
        },
        {
          src: step5,
          title : 'Wait and ready to go!',
          altText: 'step 5',
          caption: 'While waiting confirmation from organization. you can find information related to volunteering!'
        }
        ],
    testimony: [
        {
          src: person1,
          name : 'Heri S',
          title : 'Volunteer',
          altText: 'person 1',
          caption: '"As an activist in one of the disaster communities, I feel greatly helped by the RelaOne application. We can easily select and recruit prospective volunteers according to their qualifications."'
        },
        {
          src: person2,
          name : 'Maria Binar C',
          title : 'Volunteer',
          altText: 'person 2',
          caption: '"As an activist in one of the disaster communities, I feel greatly helped by the RelaOne application. We can easily select and recruit prospective volunteers according to their qualifications."'
        },
        {
          src: person3,
          name : 'Raymond',
          title : 'Volunteer',
          altText: 'person 3',
          caption: '"As an activist in one of the disaster communities, I feel greatly helped by the RelaOne application. We can easily select and recruit prospective volunteers according to their qualifications."'
        }
        ]
}

const landingPage=(state=initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default landingPage;


