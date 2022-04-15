# double-video

https://serhii-buniak.github.io/double-video/

## What is this project about
This project was made to synchronize 2 different videos. The first is used as an __audio track__ and the second as a __video track__

__Functionality:__
* possibility to set delay between two videos
* the ability to change the episode*
* passive audio sync
* passive video sync 

*only when name of files have difference in number of episode

![prewiew.png](https://github.com/Serhii-Buniak/double-video/blob/master/files_for_readme/prewiew.png?raw=true)

## Architecture

__Items list:__
1. UIModel
2. Model
3. Controller
4. Data
5. Event

![scheme.png](https://github.com/Serhii-Buniak/double-video/blob/master/files_for_readme/scheme.png?raw=true)

### UIModel
UIModels encapsulate a string with an id, class, or tag to get an ___HTMLElement___ from a webpage. It can also contain other UIModels. 

UIModel encapsulates methods for interacting with HTMLElement

It's like a component in React

![UIModel.svg](https://github.com/Serhii-Buniak/double-video/blob/master/files_for_readme/UIModel.svg?raw=true)

### Model
The Model is responsible for interactions between __UIModels__ and other __Models__

__Model can contain:__
* UIModel
* Model
* Or nothing

![Model.svg](https://github.com/Serhii-Buniak/double-video/blob/master/files_for_readme/Model.svg?raw=true)

### Data
Data has Repositories

__Repositories__ encapsulate DataContext and constants (keys) for interacting with __localstorage__

![Data.svg](https://github.com/Serhii-Buniak/double-video/blob/master/files_for_readme/Data.svg?raw=true)

### Controller
Controllers are responsible for implementing event handlers

Controller is responsible for interactions between:
* UIModel
* Model
* Data

![Controller.svg](https://github.com/Serhii-Buniak/double-video/blob/master/files_for_readme/Controller.svg?raw=true)

### Event
The Event is responsible for connecting the controller methods to UIModels and Models.

This is not a class

This is not a function

![Event.svg](https://github.com/Serhii-Buniak/double-video/blob/master/files_for_readme/Event.svg?raw=true)
