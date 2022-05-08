import React from "react";
import "./Blogs.css";

const Blog = () => {
  return (
    <div>
      <div className="blog-container">
        <div className="blog">
          <h2>Difference between javascript and nodejs </h2>
          <p>
            {" "}
            javascript is a programming language that can be run in any browser
            . on the other hand node js a a javascript runtime or running
            envirunment for a javascript programming language that holds many
            excesses
          </p>
          <p>
            {" "}
            javascript is used for any client side activity for a web
            application like changing in web page without refressing page on the
            other hand node js is used for performing non blocking operation of
            any operating system.
          </p>
          <p>
            {" "}
            javascript can be run in any engine like Firefox google chrome
            safari etc . But node js only run in v8 engine{" "}
          </p>
        </div>
        <div className="blog">
          <h2> sql vs nosql </h2>
          <div>
            <table class="GeneratedTable">
              <thead>
                <tr>
                  <th>Sql</th>
                  <th>No Sql</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Relational Database </td>
                  <td>Non relational database </td>
                </tr>
                <tr>
                  <td>Table based</td>
                  <td>
                    <ul>
                      <li>Key value paiers</li>
                      <li> document Based</li>
                      <li>Graph based </li>
                      <li> wide column stored</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    SQL is the programming language used to interface with
                    relational databases
                  </td>
                  <td>
                    NoSQL is a class of DBMs that are non-relational and
                    generally do not use SQL
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> 
        <div className="blog">
          <h2>What is the purpose of jwt and how does it work ? </h2> 
          <p>
             JWT is stand for json web token . JWT is  open standard used to share security information.
             JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. 
             Additionally, the structure of a JWT allows us to verify that the content hasn't been tampered with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
