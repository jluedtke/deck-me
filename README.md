# DeckMe
  Magic: The Gathering deck building application that allows users to search for cards and create a deck.

##### Joe Parsley(Design), Adrian Agnic(Development), Jared Luedtke(Development)  (7-27-2017)

## Description
  Application that allows users to search for specific Magic cards, and construct a deck. Users can create an account to keep track of all their decks. Users can also view statistical information about their deck.

## Specifications
Spec | Input | Output
--- | --- | ---
User creates an account | 'Create New User' | 'username, user@email.com, password'
User logs in | 'Log In' | 'user@email.com, password'
User creates a new deck | 'New Deck' | 'Empty Deck'
User searches for cards | 'Sol Ring' | 'Sol Ring -colorless -artifact'
User adds cards to deck | 'MyDeck' | '-Sol Ring'
User views deck graphs | ' ' | '15 Land, 25 Creatures, 10 Instants'
User deletes deck | 'Delete MyDeck' | 'Deck Deleted'
User views profile page | 'Profile' | ' '
User updates account information | 'Update Email' | 'newemail@yes.com'
User can receive email verification of account creation and password reset | 'Reset Password' | 'Password Reset Email Sent'


## Installation
* Go-to <a href="https://github.com/jluedtke/deck-me">GitHub</a>
* Clone repository to your machine (ex. git clone www.git.com/project)
* Navigate to the project directory with a terminal
* Run commands:
  * npm install
  * npm install promise-polyfill --save
* Create a file named 'api-keys.ts' in src/app
  * it should contain:
    * export var masterFirebaseConfig = {
      ~FIREBASE INFORMATION HERE*
    }
* Locate package.json for Angular commands
  * Run 'ng serve' to view locally (localhost:4200)
* Please log any contributions

## Technologies
* Angular
* Javascript
  * Typescript
* Firebase
* HTML
* CSS/Sass

## Known Bugs
  Certain cards without an image property will not display, but they can still be added to a deck

## License
  Protected under MIT License
  Copyright (c) 2017 Copyright Holder All Rights Reserved.
