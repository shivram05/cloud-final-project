import React from 'react';
import { Card, CardBody } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { FeedbackType } from '../types/sections';

const FeedbackCard = ({ name, feedback, imageUrl, blogLink }: FeedbackType) => {
  return (
    <Fade bottom duration={2000}>
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-info">{name}</h5>
              <img src={imageUrl} alt="Blog Thumbnail" className="blog-image" />
              <p className="description mt-3">{feedback}</p>
              <a href={blogLink} target="_blank" rel="noopener noreferrer">
                Read More...
              </a>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default FeedbackCard;
