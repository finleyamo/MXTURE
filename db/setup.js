import { Creator, Entry, sequelize } from './models.js'

/* Initialise empty database and add the first 2 creators and entries */
(async () => {
  await sequelize.sync();

  await Creator.create({
    username: 'chaispice',
    displayname: 'Chai Spice Latte',
    descriptors: 'she/they',
    bio: 'Not just your average greyhound.',
    email: 'notanactualemail@chai.spice',
    pfpname: 'chaispice-pfp.png',
    Entries: [{
      headline: 'Welcome to MXTURE!',
      byline: 'We are really excited to have you here!',
      path: 'welcome-to-mxture',
      coverimname: 'glitter-1.png',
      content: '<p>This is the first entry to ever be published to the journal!</p><p>The cover images are generated using OpenAI\'s DALL-E model via Canva.</p>'
    }]}, { include: [{ model: Entry, as: 'Entries' }]});
    
  await Creator.create({
    username: 'finleyamo',
    displayname: 'Finley Alva M.O.',
    descriptors: 'they/them',
    bio: 'Not just your average human.',
    email: 'notanactualemail@finley.amo',
    pfpname: 'finleyamo-pfp.png',
    Entries: [{
      headline: 'The myth of linguistic diversity',
      byline: 'Why "right" and "wrong" language do not exist.',
      path: 'myth-of-linguistic-diversity',
      coverimname: 'myth-of-linguistic-correctness.png',
      content:`<p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Linguistic correctness is a broken meter that fails to evaluate the usefulness of language in contemporary society. Instead, it is employed to enforce conformity, eliminate variation, and in turn undermine language&rsquo;s cultural, regional, socioeconomic, and educational influences. In the present text, I want to convince you that &lsquo;right&rsquo; or &lsquo;wrong&rsquo; are not helpful standards by which to judge any language. I&rsquo;ll argue for effectiveness of communication as a more wholesome, inclusive, and frankly more accurate rubric for assessing the usefulness of language than correctness is. </span></span></p><p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">The second-person plural pronoun <em>youse</em> is non-Standard. This means it is not codified in the English dictionaries or used often as part of the Standard English language. It does not mean, however, that <em>youse</em> is incorrect English, and I will present you now with two arguments for the pronoun&rsquo;s validity. Firstly, <em>youse</em> is mutually intelligible with most English dialects; English speakers are likely to recognise <em>youse</em> as referring to a group of people in which the speaker is not included. Furthermore, the second-person plural pronoun in Standard English, <em>you</em>, is spelt and pronounced exactly the same as the second-person singular pronoun, in all possible linguistic forms. This lack of distinction between singular and plural forms of the second-person pronouns creates linguistic ambiguity and, I argue, constitutes a shortcoming of the Standard English language. It&rsquo;s clear how this ambiguity can and often does give way to confusion, for example in determining the singular/plurality of the subject in questions like &lsquo;What are you doing after this?&rsquo;. So, the non-Standard <em>youse</em> fills a gap in the Standard English language, namely by distinguishing between the singular and plural of the second-person pronoun. </span></span></p><p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Despite <em>youse </em>being a natural product of the same linguistic processes that form many of our English words, its communicability and intelligibility with most English dialects, its usefulness to English speakers in the way I&rsquo;ve just demonstrated, it is still dismissed as &lsquo;incorrect&rsquo; simply because it has not been codified and was not in popular use two hundred years ago. Languages are not static entities confined within the rigid boundaries of grammar books; they are vibrant, evolving forms of expression, shaped by cultural, geographical, and social influences. Language is, at the end of the day, what we say it is. Language diversity reflects the rich tapestry of human experience. Each dialect, slang, or non-Standard form carries with it history, stories, and identity. When we open ourselves to this diversity, we enrich our understanding and appreciation of the human condition.</span></span></p><p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">As we break free from the shackles of linguistic correctness, we pave the way for a more inclusive and authentic engagement with language. Let&#39;s celebrate language in all its forms, recognizing that the true beauty of language lies in its ability to evolve, adapt, and resonate with people from all walks of life.</span></span></p>`
    }]}, { include: [{ model: Entry, as: 'Entries' }]})
})();