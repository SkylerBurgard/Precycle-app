import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import Button from '@material-ui/core/Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Slider } from 'react-slick';

const photo = [
  {
    name: 'photo 1',
    url: 'https://unsplash.com/photos/ZKWgoRUYuMk',
  },
  {
    name: 'photo 2',
    url: 'https://unsplash.com/photos/1JePildXM7g',
  },
  {
    name: 'photo 3',
    url: 'https://unsplash.com/photos/0Qh2xUsl0Kw',
  },
];

class LoginPage extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: 'slides',
    };

    return (
      <div>
        <Slider {...settings}>
          {photo.map((photo) => {
            return (
              <div>
                <img width="100%" src="{photo.url}" />
              </div>
            );
          })}
        </Slider>

        <div>
          <LoginForm />

          <center>
            <Button
              type="button"
              className="link-button"
              onClick={() => {
                this.props.history.push('/registration');
              }}
            >
              Register
            </Button>
          </center>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
