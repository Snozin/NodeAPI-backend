# Usage

## Set Your Environment

Copy `.env.example` into `.env` and set your own config

## Install Dependencies

    npm install

## Set Initial DB

    npm run initDB

Initializes DB with data from `initialAdverts.json`

## Development Start

    npm start

---

<br />

## API Routes

## GET

    /api/adverts

Returns all the adverts

    /api/adverts/?someFilters

Returns a filtered list. Admits filter by fields, sorting, skipping and limit reuslts. E.g:

` /api/adverts/?select=name price -_id&name=Bicicleta&sort=-name price`

## POST

    /api/adverts

Create a new advert

## PUT

    /api/adverts/id

Updates the match ID element

## DELETE

    /api/adverts/id

Deletes the match ID element
