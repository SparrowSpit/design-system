import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';

export class Alert extends React.PureComponent {
  constructor(props) {
    super(props);

    this.headingId = this.props.headingId || uniqueId('alert_');
  }

  heading() {
    if (typeof id !== 'undefined') {
      return (
        <h3 className="ds-c-alert__heading" id={this.props.ariaLabelledBy}>
          {this.props.heading}
        </h3>
      );
    } else {
      return <h3 className="ds-c-alert__heading">{this.props.heading}</h3>;
    }
  }

  render() {
    const classes = classNames(
      'ds-c-alert',
      this.props.hideIcon && 'ds-c-alert--hide-icon',
      this.props.variation && `ds-c-alert--${this.props.variation}`,
      this.props.className
    );

    return (
      <div
        className={classes}
        role={this.props.role}
        aria-labelledby={this.props.ariaLabelledBy}
      >
        <div className="ds-c-alert__body">
          {this.heading()}
          {this.props.children}
        </div>
      </div>
    );
  }
}

Alert.propTypes = {
  ariaLabelledBy: PropTypes.string,
  children: PropTypes.node.isRequired,
  heading: PropTypes.string,
  hideIcon: PropTypes.bool,
  /** ARIA `role` */
  role: PropTypes.oneOf(['alert', 'alertdialog', 'region']),
  variation: PropTypes.oneOf(['error', 'warn', 'success'])
};

export default Alert;
