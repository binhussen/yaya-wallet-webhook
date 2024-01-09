<div align="center">
  <!-- You are encouraged to replace this logo with your own! Otherwise you can also remove it. -->
  <img src="logo.svg" alt="logo" width="140"  height="auto" />
  <br/>

<h3><b>yaya wallet webhook</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
    - [🛠 Built With](#built-with)
        - [Tech Stack](#tech-stack)
        - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
- [👥 Authors](#authors)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 yaya wallet webhook <a name="about-project"></a>

> This repository provides a guide on integrating YaYa Wallet's incoming webhooks to receive real-time updates and automate reactions based on events in your YaYa Wallet account.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Real-time Updates:** Receive immediate transaction information updates.
- **Automatic Reactions:** Trigger reactions in your backend based on YaYa Wallet events.
- **Secure Signature Verification:** Utilize HMAC with SHA256 for secure event verification.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Webhook Payload Structure <a name="Webhook-Payload-Structure"></a>
The following example payload shows a webhook update information at the end of a transaction:

```sh
{
  "id": "1dd2854e-3a79-4548-ae36-97e4a18ebf81",
  "amount": 100,
  "currency": "ETB",
  "created_at_time": 1673381836,
  "timestamp": 1701272333,
  "cause": "Testing",
  "full_name": "Abebe Kebede",
  "account_name": "abebekebede1",
  "invoice_url": "https://yayawallet.com/en/invoice/xxxx"
}
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.


### Prerequisites

In order to run this project you need:

<!--
Example command:

```sh
 gem install rails
```
 -->

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone git@github.com:binhussen/yaya-wallet-webhook.git
```

### Install

Install this project with:
```sh
    npm install
```

### Usage

To run the project, execute the following command:
```sh
    npm start
```

### Run tests

To run tests, run the following command:

```sh
    npm test
```

<!--
Example:

```sh

```
 -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **binhussen**

- GitHub: [@binhussen](https://github.com/binhussen)
- Twitter: [@binhussens](https://twitter.com/binhussens)
- LinkedIn: [@binhussen](https://www.linkedin.com/in/binhussen)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank for yaya [help center](https://docs.yayawallet.com/hc/main/articles/1701265610-webhooks)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.