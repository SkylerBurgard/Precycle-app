import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        Precycle works with communities to waste less and recycle more. Based in
        Kansas City, Missouri, we've created an app that makes getting
        information about your waste and recycling program easy. By visiting
        Precycle, you're joining users all over the city using our web app to
        make recycling a little less complicated. If you or anyone you know have
        additional ideas on how we can improve our app, we'd love to hear it!
        Simply email us at precycle@precycle.com.
      </p>
    </div>
  </div>
);

export default AboutPage;
