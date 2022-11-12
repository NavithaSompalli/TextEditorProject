import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'

import {AiOutlineUnderline} from 'react-icons/ai'

import {GoItalic} from 'react-icons/go'

import {
  AppContainer,
  CardContainer,
  ImageContainer,
  Heading,
  Image,
  EditorContainer,
  ButtonSContainer,
  VscButton,
  GoItalicButton,
  AiOutlineUnderlineButton,
  Hrline,
  TextArea,
  ButtonListItem,
} from './styledComponents'

class IconsRoute extends Component {
  state = {
    isBoldActive: false,
    isItalicActive: false,
    isUnderLineActive: false,
  }

  onClickBoldButton = () => {
    this.setState(prevState => ({isBoldActive: !prevState.isBoldActive}))
  }

  onClickItalicButton = () => {
    this.setState(prevState => ({isItalicActive: !prevState.isItalicActive}))
  }

  onClickUnderLineButton = () => {
    this.setState(prevState => ({
      isUnderLineActive: !prevState.isUnderLineActive,
    }))
  }

  render() {
    const {isBoldActive, isItalicActive, isUnderLineActive} = this.state
    return (
      <AppContainer>
        <CardContainer>
          <ImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <EditorContainer>
            <ButtonSContainer>
              <ButtonListItem>
                <VscButton
                  onClick={this.onClickBoldButton}
                  isBoldActive={isBoldActive}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </VscButton>
              </ButtonListItem>
              <ButtonListItem>
                <GoItalicButton
                  onClick={this.onClickItalicButton}
                  isItalicActive={isItalicActive}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </GoItalicButton>
              </ButtonListItem>
              <ButtonListItem>
                <AiOutlineUnderlineButton
                  onClick={this.onClickUnderLineButton}
                  isUnderLineActive={isUnderLineActive}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </AiOutlineUnderlineButton>
              </ButtonListItem>
            </ButtonSContainer>
            <Hrline />
            <TextArea
              rows="20"
              cols="60"
              isBoldActive={isBoldActive}
              isItalicActive={isItalicActive}
              isUnderLineActive={isUnderLineActive}
            />
          </EditorContainer>
        </CardContainer>
      </AppContainer>
    )
  }
}

export default IconsRoute
