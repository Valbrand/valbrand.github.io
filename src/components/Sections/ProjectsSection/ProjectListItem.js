import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class ProjectListItem extends Component {
  constructor (...args) {
    super(...args)

    this.state = {
      image: null
    }
  }

  render () {
    const { name, description, link } = this.props
    const { image } = this.state

    return (
      <Root>
        <DescriptionContainer>
          <h3>
            <a href={link}>
              {name}
            </a>
          </h3>
          <p>{description}</p>
        </DescriptionContainer>

        <AppIconContainer>
          {image ? <AppIcon src={image} alt={`${name} icon`} /> : null}
        </AppIconContainer>
      </Root>
    )
  }

  componentDidMount () {
    import(`./app-icons/${this.props.icon}`)
      .then((iconPath) => {
        this.setState({
          image: iconPath
        })
      })
  }
}

ProjectListItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string
}

const Root = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 20rem;

  :nth-child(2n+1) {
    flex-direction: row-reverse;
  }
`

const DescriptionContainer = styled.div`
  flex: 1 0 0;
`

const AppIconContainer = styled.div`
  flex: 0 0 0;
`

const AppIcon = styled.img`
  height: 100%;
  width: auto;
`

export default ProjectListItem
