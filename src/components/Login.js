import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button, Card, Spinner, Col } from "react-bootstrap";

import { authActions } from "../store/actions/authActions";
import { userService } from "../services/user.service";
const Login = () => {
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const [userCode, setUserCode] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(authActions.logout());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (userCode) {
      dispatch(authActions.login(userCode))
        .then(() => {
          setError(false);
          return userService.getUserInfo();
        })
        .then((userInfo) => {
          if (!userInfo.fullName && !userInfo.stdId) {
            history.push("/info-form");
          } else {
            history.push("/");
          }
        })
        .catch((error) => {
          setError(true);
        });
    }
  };

  return (
    <Container>
      <div className=" d-flex justify-content-center w-100">
        <Col lg={6} xl={6} xs={12}>
          <Card className="w-100 px-4 py-3 border-custom-lg">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formCode">
                <Form.Label>Mã Code</Form.Label>
                <Form.Control
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  type="text"
                  placeholder="Nhập mã code"
                  className="border-custom-lg"
                />
                {submitted && !userCode && (
                  <div>
                    <small className="text-danger mt-4">Nhập mã code</small>
                  </div>
                )}
                {submitted && error && (
                  <div>
                    <small className="text-danger mt-4">
                      Sai mã code hoặc code không tồn tại
                    </small>
                  </div>
                )}
              </Form.Group>
              <Button
                type="submit"
                variant="outline-custom"
                className="custom-transition w-100"
              >
                {loggingIn && (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
                Xác nhận
              </Button>
            </Form>
          </Card>
        </Col>
      </div>
    </Container>
  );
};

export default Login;
