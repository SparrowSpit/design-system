import GitHubLinks from './GitHubLinks';
import React from 'react';

const Header = () => {
  const rootPath = process.env.root ? `/${process.env.root}` : '/';

  return (
    <div>
      <div className="usa-banner">
        <div className="usa-accordion">
          <header className="usa-banner__header">
            <div className="usa-banner__inner">
              <div className="grid-col-auto">
                <img
                  className="usa-banner__header-flag"
                  src="../../dist/img/us_flag_small.png"
                  alt="U.S. flag"
                />
              </div>
              <div className="grid-col-fill tablet:grid-col-auto">
                <p className="usa-banner__header-text">
                  An official website of the United States government
                </p>
                <p className="usa-banner__header-action" aria-hidden="true">
                  Here’s how you know
                </p>
              </div>
              <button
                className="usa-accordion__button usa-banner__button"
                aria-expanded="false"
                aria-controls="gov-banner"
              >
                <span className="usa-banner__button-text">
                  Here’s how you know
                </span>
              </button>
            </div>
          </header>
          <div
            className="usa-banner__content usa-accordion__content"
            id="gov-banner"
          >
            <div className="grid-row grid-gap-lg">
              <div className="usa-banner__guidance tablet:grid-col-6">
                <img
                  className="usa-banner__icon usa-media-block__img"
                  src="../../dist/img/icon-dot-gov.svg"
                  alt="Dot gov"
                />
                <div className="usa-media-block__body">
                  <p>
                    <strong>The .gov means it’s official.</strong>
                    <br /> Federal government websites often end in .gov or
                    .mil. Before sharing sensitive information, make sure you’re
                    on a federal government site.
                  </p>
                </div>
              </div>
              <div className="usa-banner__guidance tablet:grid-col-6">
                <img
                  className="usa-banner__icon usa-media-block__img"
                  src="../../dist/img/icon-https.svg"
                  alt="Https"
                />
                <div className="usa-media-block__body">
                  <p>
                    <strong>The site is secure.</strong>
                    <br /> The <strong>https://</strong> ensures that you are
                    connecting to the official website and that any information
                    you provide is encrypted and transmitted securely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="ds-base--inverse ds-u-padding--3 ds-u-display--flex ds-u-justify-content--between ds-u-align-items--center">
        <h1 className="ds-h3 ds-u-margin-bottom--0">
          <a href={rootPath} className="c-header__title" title="Home">
            CMS Design System
          </a>
        </h1>
        <GitHubLinks
          className="ds-u-display--none ds-u-md-display--block"
          inverse
        />
      </header>
    </div>
  );
};

export default Header;
