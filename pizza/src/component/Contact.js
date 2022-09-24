import React from "react";
import { Container, Row, Col, Table,colSpan,Image } from "react-bootstrap";
import {AiOutlinePhone} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineMobile} from 'react-icons/ai';


export const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            Voluptate magna ea duis deserunt cupidatat consequat. Ex proident ut
            ut labore culpa et non dolore id. Mollit aliquip excepteur sunt
            irure cillum dolor ex consectetur culpa. Aute ex do proident magna
            eu ut dolor proident nisi aliquip mollit irure et quis. Ullamco
            incididunt culpa sunt culpa sit cupidatat id id sint occaecat
            exercitation minim minim. Ullamco veniam quis esse culpa voluptate
            reprehenderit ex laborum ipsum laborum in aliqua tempor cillum.
            Incididunt laborum dolore nulla eu ad culpa minim dolor. Incididunt
            proident magna ea ex. Laborum magna duis mollit elit sit voluptate
            velit aliquip qui sint deserunt ad eiusmod. Tempor ea velit aliquip
            reprehenderit exercitation labore amet commodo aliqua. Ut proident
            excepteur id mollit. Irure nulla ex exercitation sit culpa dolore
            non dolor sunt minim officia irure amet cupidatat. Enim pariatur id
            ipsum irure. Et ut irure officia pariatur mollit culpa deserunt aute
            elit labore culpa. Eiusmod id nulla ipsum commodo et adipisicing
            pariatur. Nulla consectetur Lorem excepteur anim ipsum velit.
            Eiusmod elit sit aliqua dolor occaecat cupidatat elit ad tempor eu
            veniam aliqua deserunt nulla. Ut ea sint fugiat Lorem do anim
            laboris ea voluptate. In fugiat amet anim nulla. Dolore anim laboris
            enim do eu sint sunt ut. Velit sint anim fugiat aliqua do minim elit
            sunt laboris est officia exercitation nulla. Velit ut esse proident
            qui minim adipisicing.
          </Col>
          <Col md={6} style={{height:'100%'}}><Image src="images/farmhouse.jpg"  />
</Col>
<Col>        <Table striped bordered hover text-center className="text-center">
      <thead>
        <tr> <th  className="bg-warning" colSpan={3}>
        --Contact Details-- </th></tr>
      </thead>
      <tbody>
        <tr>
          <td><AiOutlinePhone /></td>
          <td>Phone</td>
          <td>012-123457</td>
        </tr>
        <tr>
          <td><AiOutlineMobile /></td>
          <td>Call</td>
          <td>123457</td>
        </tr>
        <tr>
          <td><AiOutlineMail /></td>
          <td>Email</td>
          <td>Help at your domain</td>
        </tr>
      </tbody>
    </Table>
</Col>


        </Row>

      </Container>
    </>
  );
};
