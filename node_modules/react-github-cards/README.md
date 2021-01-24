# react-github-cards
  show github profile card and repo card by the way of react compoent, inpired by [mamal72/react-github](https://github.com/mamal72/react-github) and [lepture](https://github.com/lepture/github-cards), you can choose theme of the card,  welcome to fork to custom your own theme or make a pull request.

[Demo](http://jkvim.github.io/react-github-cards)

## Install
      npm install react-github-cards -S  
  
## Usage
```jsx
import { UserCard, RepoCard } from 'react-github-cards';
import 'react-github-cards/dist/default.css';

// use medium theme
// import { UserCard, RepoCard } from 'react-github-cards/dist/medium'
import 'react-github-cards/dist/medium.css';


render() {
  <div>
    <UserCard username="foo" />
    <RepoCard username="foo" repo="bar" />
  </div>
}
```

## Themes
  currently, just have two kinds of themes, `default` and `medium`. 

## Authenticated request

to avoid Github Api Rate Limits simply provide an OAuth Client/Secret:

```jsx
import { UserCard, RepoCard } from 'react-github-cards';

render() {
  <div>
    <UserCard username="foo" clientId="foo" clientSecret="bar" />
    <RepoCard username="foo" repo="bar"  clientId="foo" clientSecret="bar"/>
  </div>
}
```

## Components
- `<UserCard />`

|props   | required| value |
|--------|---------|-------|
|username| yes     | string|
|clientId| no     | string|
|clientSecret| no     | string|

- `<RepoCard />`

|props   | required| value |
|--------|---------|-------|
|username| yes     | string|
|repo    | yes     | string|
|clientId| no     | string|
|clientSecret| no     | string|


## Licence
 MIT
