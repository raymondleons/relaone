import React, { Component } from 'react';
import { Container, Row, Col, CardDeck, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import Dotdotdot from 'react-dotdotdot';
import volunteer from '../assets/images/volunteer.jpg';
import ringoffire from '../assets/images/ringoffire.jpg';
import palu from '../assets/images/palu.jpg';

class ArticleList extends Component {
  render() {
    return (
      <div className="article-list">
        <div className="content-title">
            <h3 className="bold-text">Article</h3>
        </div>
        <div>
                <Card className="article-card">
                    <Row>
                        <Col md="4">
                            <CardImg className="article-image" src={volunteer} alt="article-1"></CardImg>
                        </Col>
                        <Col md="8">
                            <CardBody>
                                <CardTitle><h4>5 Things You Should Know Before You Volunteer</h4></CardTitle>
                                <CardText><Dotdotdot clamp={3}>At some point, many of us declare that we want to volunteer more. We might start volunteering somewhat accidently when a friend invites us to participate in a local coat drive or because of a company initiative like volunteer day. In any case, these initial moments of giving back might spark an interest in doing more.

But once you decide you want to do more, then what? Many folks think volunteering is just about stuffing envelopes in a messy office. And while there is nothing wrong with this, there is much more to the world of volunteering.

I’ve volunteered in different roles: mentoring teens, serving food at a soup kitchen, participating in decision making as a nonprofit board member, and writing grants for organizations I admire. I’m a bit of volunteer junkie, and by taking on different responsibilities, I’ve learned there is an opportunity for everyone, and finding it requires some planning.

Here are a few steps you can take to ensure you find a volunteer opportunity that allows you to give back, make a difference, and feel good:

1. KNOW WHAT YOU WANT TO GET OUT OF IT
This might seem counterintuitive; isn’t volunteering all about giving? Obviously giving is at the core of volunteering, but many of us also want to get something out of our experiences volunteering. Perhaps you want to learn more about a cause and connect with new people. Or maybe you want get some hands-on experience in a new field like fundraising or strategic planning. Or perhaps you’re interested in a major issue in your community, and you’re eager to roll up your sleeves.

These different motivations will push you toward different kinds of opportunities and organizations. If you want experience working on larger projects like a communications strategy, you’re looking for pro bono consulting opportunities. If you want to help your neighborhood food pantry stock its shelves for the winter, you’re better off just walking over there and chatting about ways you can help.

2. KNOW WHAT YOU WANT TO GIVE
A big mistake that I hear volunteers make is saying that they “just want to get involved.” Well, in what way? Are you really good at writing and want to help an organization take its communications to new heights? Do you love hitting the streets and canvassing for a good cause? Or perhaps you prefer helping out behind the scenes with things like mailings–tapping into your love for organizing and straightforward tasks.

Sometimes we feel so compelled by a cause or issue that we just want to throw ourselves in yet wonder why a few days or weeks down the road we feel a bit out of place. Knowing what you want to give, like knowing what you want to get, will allow you to determine whether or not the opportunity will be a great fit.

3. KNOW WHAT YOU CAN COMMIT
This is a simple one: Be honest with yourself about how much time you can commit.

As I mentioned earlier, we often have an initial rush of excitement about volunteering that might cause us to over-commit. If you’ve never really volunteered before, going all in with a weekly assignment that lasts for three months might be too much. This is especially the case with volunteer opportunities that are more direct service like mentoring, serving food, and so on. There is often prep work that needs to be done, travel, and other elements that affect the total amount of time you’ll spend volunteering.

In many cases, you can always start small and ask to get more involved later. This is better than starting off with a large commitment and backing down later on, leaving the organization scrambling.

4. KNOW WHAT’S OUT THERE
Sometimes the best way to find an opportunity is to simply poke around and see what kinds of opportunities are available. An activity crafted by NYU Wagner School of Public Service encourages people who aren’t quite sure of what kind of work they want to do to collect a variety of job descriptions and sort them by interest in the job or the organization. You can do something similar for volunteer opportunities. Take a look at Idealist.org or Catchafire and peruse what’s available. What speaks to you and why?

5. KNOW WHO’S OUT THERE
Ask people about their experiences volunteering (you can search LinkedIn to see which of your contacts is volunteering). Why do they volunteer? Where? How often? What makes it worthwhile for them? Can you tag along with them or see what they are working on? Tapping into your network will you give the knowledge you need to find a volunteer opportunity you’ll love.</Dotdotdot></CardText>
                                <CardText className="text-muted">Created by Allison Jones</CardText>
                            </CardBody>
                        
                        </Col>
                    </Row>
                </Card>

                <Card className="article-card">
                    <Row>
                        <Col md="4">
                            <CardImg className="article-image" src={ringoffire} alt="article-1"></CardImg>
                        </Col>
                        <Col md="8">
                            <CardBody>
                                <CardTitle><h4>Ring of fire: Why Indonesia has so many earthquakes</h4></CardTitle>
                                <CardText><Dotdotdot clamp={3}>Indonesia has a deadly and unlucky history with earthquakes. It is frequently hit, the latest tremor coming 14 years after a 9.1-9.3 magnitude quake off Sumatra prompted a tsunami that left hundreds of thousands of people dead across the Indian Ocean. The southeast Asian country suffers so much because of its position on a large grid of tectonic plates, on which all the Earth's countries and seas sit. 
                                Indonesia is at the meeting point of three major continental plates - the Pacific, the Eurasian and the Indo-Australian plates - and the much smaller Philippine plate.

It also falls on the "Ring of fire", a horseshoe-shaped area around the edges of the Pacific Ocean, from Australia to the Andes, along which 90% of all earthquakes occur.

Indonesia's location makes it particularly vulnerable to earth tremors.
The Earth's plates grind against each other all the time. Sometimes they get stuck and pressure builds - an earthquake is the sudden and violent release of this pressure.

The archipelago has also been created by its location on the ring, with many of the country's 17,000 islands forged out of the tectonic and volcanic forces pushing up land, frequently resulting in eruptions or magma and ash.

There are huge swathes of Indonesia where there is always a volcano nearby or on the horizon, and the area is famed for the size of earlier volcanic blasts, with Krakatoa among recent historical incidences.

An example of earthquakes occurring close to a volcano happened in August when a series of quakes rocked the island of Lombok, which owes its existence to Mt Rinjani and its ancient predecessors.

Its place at the conjunction of four plates, plus tendency for people to live in low-lying areas close to the coast, makes Indonesia's islands particularly at risk from tsunamis.

The huge waves are generated, like the ones on Boxing Day in 2004 and the ones that killed 20,000+ people in Japan in 2011, when the movement of the earth's plates displaces huge volumes of water.

The recent quake in Sulawesi caused huge damage because the quake hit close to a high population centre in Palu, and the town was then struck again by a wall of water funnelled down a bay to the sea-level town.

Japan, Turkey, Mexico, Pakistan, Nepal, the Philippines, India and El Salvador are also among the countries most vulnerable to earthquakes.</Dotdotdot></CardText>
                                <CardText className="text-muted">Created by Philip Whiteside</CardText>
                            </CardBody>
                        
                        </Col>
                    </Row>
                </Card>

                <Card className="article-card">
                    <Row>
                        <Col md="4">
                            <CardImg className="article-image" src={palu} alt="article-1"></CardImg>
                        </Col>
                        <Col md="8">
                            <CardBody>
                                <CardTitle><h4>3 Things Volunteers Must Prepare in Disaster-hit Palu, Donggala</h4></CardTitle>
                                <CardText><Dotdotdot clamp={3}>Many disaster reliefs, either foreign or domestic, are currently making their way to Palu in Central Sulawesi, which mostly takes form in humanitarian aid from government agencies and non-governmental organizations (NGO). 
                                Humas Basarnas personnel carry a recovered body in Palu, September 30, 2018 in this picture obtained from social media. 2018. HUMAS BASARNAS/via REUTERS

To help assist these relief efforts, Indonesia’s Health Ministry through its Director General of Disease Prevention and Control Anung Sugihantono shared three crucial elements that need to be considered by teams and individuals that are tasked in disaster-stricken Central Sulawesi. 
</Dotdotdot></CardText>
                                <CardText className="text-muted">Created by Mitra Tarigan</CardText>
                            </CardBody>
                        
                        </Col>
                    </Row>
                </Card>
        </div>
      </div>
    )
  }
}

export default ArticleList;


