import React, { Component } from 'react';
import volunteer from '../assets/images/volunteer.jpg';

class ArticleDetail extends Component {
  render() {
    return (
    
      <div className="article-detail">
        <h1 className="bold-text">5 Things You Should Know Before You Volunteer</h1>
        <p className="text-muted">Created by Allison Jones</p>
        <div>
            <img className="article-detail-image" src={volunteer} alt="be volunteer"></img>
        </div>
        <div>
            <p>
            At some point, many of us declare that we want to volunteer more. We might start volunteering somewhat accidently when a friend invites us to participate in a local coat drive or because of a company initiative like volunteer day. In any case, these initial moments of giving back might spark an interest in doing more.

But once you decide you want to do more, then what? Many folks think volunteering is just about stuffing envelopes in a messy office. And while there is nothing wrong with this, there is much more to the world of volunteering.

I’ve volunteered in different roles: mentoring teens, serving food at a soup kitchen, participating in decision making as a nonprofit board member, and writing grants for organizations I admire. I’m a bit of volunteer junkie, and by taking on different responsibilities, I’ve learned there is an opportunity for everyone, and finding it requires some planning.

Here are a few steps you can take to ensure you find a volunteer opportunity that allows you to give back, make a difference, and feel good:
</p>

<h5 className="bold-text">1. KNOW WHAT YOU WANT TO GET OUT OF IT</h5>
<p>
This might seem counterintuitive; isn’t volunteering all about giving? Obviously giving is at the core of volunteering, but many of us also want to get something out of our experiences volunteering. Perhaps you want to learn more about a cause and connect with new people. Or maybe you want get some hands-on experience in a new field like fundraising or strategic planning. Or perhaps you’re interested in a major issue in your community, and you’re eager to roll up your sleeves.

These different motivations will push you toward different kinds of opportunities and organizations. If you want experience working on larger projects like a communications strategy, you’re looking for pro bono consulting opportunities. If you want to help your neighborhood food pantry stock its shelves for the winter, you’re better off just walking over there and chatting about ways you can help.
</p>

<h5 className="bold-text">2. KNOW WHAT YOU WANT TO GIVE</h5>
<p>
A big mistake that I hear volunteers make is saying that they “just want to get involved.” Well, in what way? Are you really good at writing and want to help an organization take its communications to new heights? Do you love hitting the streets and canvassing for a good cause? Or perhaps you prefer helping out behind the scenes with things like mailings–tapping into your love for organizing and straightforward tasks.

Sometimes we feel so compelled by a cause or issue that we just want to throw ourselves in yet wonder why a few days or weeks down the road we feel a bit out of place. Knowing what you want to give, like knowing what you want to get, will allow you to determine whether or not the opportunity will be a great fit.
</p>

<h5 className="bold-text">3. KNOW WHAT YOU CAN COMMIT</h5>
<p>
This is a simple one: Be honest with yourself about how much time you can commit.

As I mentioned earlier, we often have an initial rush of excitement about volunteering that might cause us to over-commit. If you’ve never really volunteered before, going all in with a weekly assignment that lasts for three months might be too much. This is especially the case with volunteer opportunities that are more direct service like mentoring, serving food, and so on. There is often prep work that needs to be done, travel, and other elements that affect the total amount of time you’ll spend volunteering.

In many cases, you can always start small and ask to get more involved later. This is better than starting off with a large commitment and backing down later on, leaving the organization scrambling.
</p>

<h5 className="bold-text">4. KNOW WHAT’S OUT THERE</h5>
<p>
Sometimes the best way to find an opportunity is to simply poke around and see what kinds of opportunities are available. An activity crafted by NYU Wagner School of Public Service encourages people who aren’t quite sure of what kind of work they want to do to collect a variety of job descriptions and sort them by interest in the job or the organization. You can do something similar for volunteer opportunities. Take a look at Idealist.org or Catchafire and peruse what’s available. What speaks to you and why?
</p>

<h5 className="bold-text">5. KNOW WHO’S OUT THERE</h5>
<p>
Ask people about their experiences volunteering (you can search LinkedIn to see which of your contacts is volunteering). Why do they volunteer? Where? How often? What makes it worthwhile for them? Can you tag along with them or see what they are working on? Tapping into your network will you give the knowledge you need to find a volunteer opportunity you’ll love.
</p>
            
        </div>
      </div>
    )
  }
}

export default ArticleDetail;


