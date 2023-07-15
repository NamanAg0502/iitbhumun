import { ThemeProvider } from '@material-tailwind/react';
import Head from 'next/head';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>IITBHU MUN</title>
        <meta
          name="keywords"
          content="modelunitednations ,mun ,unitednations ,imun ,youth ,internationalconference ,internationalmun ,un ,diplomacy ,munconference ,conference ,onlinemun ,international ,onlineconference ,leaders ,globalopportunity ,opportunity ,youngleaders ,online ,webinar ,modelun ,debate ,internationalrelations ,youthleader ,youthpower ,diversity ,asiamun ,india ,malaysia ,identitycrisis ,iitbhu ,iitdelhi ,iitbombay ,iit ,iitkanpur ,iitkgp ,iitmadras ,iitroorkee ,iitmemes ,iitguwahati ,iithyderabad ,bhu ,iitkharagpur ,iitian ,iitindore ,iitpatna ,iitropar ,iitmandi ,iitjodhpur ,memes ,iitdhanbad ,iitjammu ,engineeringmemes ,iitgoa ,collegememes ,iitb ,memesdaily ,gpat ,meme ,sarcasm"
        />
        <meta
          name="description"
          content="Congratulations! We’re very excited that you will be doing Model United Nations for the first time. You are about to embark on a life-changing journey that will help you develop confidence in leading others, a stronger awareness of global issues, and the chance to make new friends from around the world. Model UN is a […"
        />
        <meta property="og:url" content="https://iitbhumun.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/images/Vector-dark.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
