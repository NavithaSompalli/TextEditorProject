import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  width: 80%;
  background-color: #1b1c22;
  border-radius: 20px;
  display: flex;
  padding: 20px;
  margin-top: 80px;
  margin-bottom: 80px;
`
export const ImageContainer = styled.div`
  width: 50%;
`
export const Heading = styled.h1`
  color: #ffffff;
  text-align: center;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
`
export const Image = styled.img`
  height: 400px;
`

export const EditorContainer = styled.div`
  background-color: #25262c;
  width: 50%;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #334155;
`

export const ButtonSContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`

export const ButtonListItem = styled.li``

export const VscButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.isBoldActive ? '#faff00' : '#f1f5f9')};
`

export const GoItalicButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.isItalicActive ? '#faff00' : '#f1f5f9')};
`

export const AiOutlineUnderlineButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.isUnderLineActive ? '#faff00' : '#f1f5f9')};
`

export const Hrline = styled.hr`
  border: 1px solid #334155;
`

export const TextArea = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-weight: ${props => (props.isBoldActive ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalicActive ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.isUnderLineActive ? 'underline' : 'normal'};
  font-size: 20px;
`
