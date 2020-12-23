import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDribbble } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <ul class="social">
            <li class="li1">
              <a class="ease-all" href="#">
                <FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon>

                <span class="hide-text">dribble</span>
              </a>
            </li>
            <li class="li2">
              <a class="ease-all" href="#">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>

                <span class="hide-text">Twitter</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <style jsx>{`
        section {
          width: 200px;
          margin: 0 auto;
        }

        span {
          text-indent: 100%;
          white-space: nowrap;
          overflow: hidden;
          display: block;
        }

        a {
          -webkit-transition: all 400ms ease-in-out;
          -moz-transition: all 400ms ease-in-out;
          -o-transition: all 400ms ease-in-out;
          -ms-transition: all 400ms ease-in-out;
          transition: all 400ms ease-in-out;
        }

        /* Social Icons */

        ul {
          height: 10rem;
          list-style-type: none;
          margin: 0;
          padding: 0;
          text-align: center;
        }

        ul li a {
          display: inline-block;
          float: left;
          width: 40px;
          height: 40px;
          margin-right: 1rem;
          text-align: center;
          padding-top: 13px;

          -webkit-border-radius: 20px;
          -moz-border-radius: 20px;
          -o-border-radius: 20px;
          -ms-border-radius: 20px;
          border-radius: 20px;

          -webkit-box-shadow: inset 0 0 0 40px #495057;
          -moz-box-shadow: inset 0 0 0 40px #495057;
          -o-box-shadow: inset 0 0 0 40px #495057;
          -ms-box-shadow: inset 0 0 0 40px #495057;
          box-shadow: inset 0 0 0 40px #495057;

          color: #fff;
        }

        ul li a:hover {
          -webkit-box-shadow: inset 0 0 0 3px #fff;
          -moz-box-shadow: inset 0 0 0 3px #fff;
          -o-box-shadow: inset 0 0 0 3px #fff;
          -ms-box-shadow: inset 0 0 0 3px #fff;
          box-shadow: inset 0 0 0 3px #fff;

          color: #fff;
        }
        ul li:nth-child(2) a:hover {
          background: #55acee;
        }
        ul li:nth-child(1) a:hover {
          background: #e36397;
        }
      `}</style>

      <style jsx global>{`
        * {
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }

        html {
          -moz-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          -o-text-size-adjust: 100%;
          text-size-adjust: 100%;
        }

        body {
          font-family: sans-serif;
          padding: 2rem 4rem;
          background-color: #f5f5f5;
        }

        section {
          width: 200px;
          margin: 0 auto;
        }

        .hide-text {
          text-indent: 100%;
          white-space: nowrap;
          overflow: hidden;
          display: block;
        }
      `}</style>
    </div>
  );
}
