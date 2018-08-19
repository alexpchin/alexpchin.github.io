import styled from 'styled-components';
import React from 'react';
import { Columns, Content, Card } from 'react-bulma-components';
import { Heading, HorizontalColumns } from '.';
import { Fade } from 'react-reveal';

import { white, black, red } from '../../data';

const ProjectsSection = styled.section`
  background: ${white};
  padding: 3rem 0;
  min-height: 50vh;
  h2 {
    color: ${black};
    text-align: center;
    padding: 0 0 3rem 0;
  }
`;

const Project = styled(Columns.Column)`
  min-width: 320px;
  color: ${black};
  p {
    color: ${black};
  }
  time {
    color: ${black};
  }
  .card {
    box-shadow: none;
    outline: 1px solid ${black};
    .card-image {
      max-height: 320px;
      padding: 0;
      overflow: hidden;
      background: ${black};
      outline: 1px solid ${black};
    }
  }
`;

const Projects = ({ data }) => {
  return (
    <ProjectsSection>
      <Fade cascade>
        <Heading size={3} renderAs="h2">
          Recent Projects
        </Heading>
        <HorizontalColumns>
          {data.map((project, i) => {
            return (
              <Fade key={i}>
                <Project>
                  <Card>
                    <Card.Image src={project.image} />
                    <Card.Content>
                      <Content>
                        <Heading size={5} renderAs="p">
                          {project.title}
                        </Heading>
                        <Heading subtitle size={6} renderAs="p">
                          <time>{project.role}</time>
                        </Heading>
                        {project.description}
                      </Content>
                    </Card.Content>
                  </Card>
                </Project>
              </Fade>
            );
          })}
        </HorizontalColumns>
      </Fade>
    </ProjectsSection>
  );
};

export { Projects };
