# Queue Management App

This project implements a web app that provides a REST API for managing queues of messages. The server is accompanied by a web page that renders all available queues, the number of messages in each, and allows interaction with the queues.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Endpoints](#api-endpoints)
- [Web Interface](#web-interface)
- [Installation](#installation)

## Features

- **REST API** for managing message queues:
  - Add messages to queues.
  - Retrieve messages from queues with optional timeout.
- **Web Interface**:
  - Displays all available queues.
  - Shows the number of messages in each queue.
  - Allows users to select a queue and fetch messages.

## Tech Stack

- **Backend**: [Your chosen language and framework]
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: Voyantis "look & feel"

## API Endpoints

### POST `/api/{queue_name}`

- **Description**: Add a new message to the specified queue.
- **Request Body**: JSON object representing the message.
- **Response**:
  - `200 OK`: Message successfully added to the queue.

### GET `/api/{queue_name}?timeout={ms}`

- **Description**: Retrieve the next message from the specified queue.
- **Query Parameters**:
  - `timeout` (optional): Time to wait for a message in milliseconds. Default is 10 seconds.
- **Response**:
  - `200 OK`: Returns the next message in the queue.
  - `204 No Content`: No message available after the timeout has elapsed.

## Web Interface

The web interface provides a dashboard to manage queues:

- **Queue List**: Displays all available queues and the number of messages in each.
- **Queue Interaction**: Select a queue, click 'Go', and render the response.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/orimaromcom/queue-manager.git
   ```
