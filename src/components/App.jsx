import React, { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"
import { Modal } from "./Modal/Modal"


export class App extends Component {
  state = {
    name: '',
  };

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <Button/>
        <Modal/>
      </>
    );
  }
};
