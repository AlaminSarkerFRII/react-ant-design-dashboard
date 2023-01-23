import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className='App'>
      <h2>Ant Design Dashboard</h2>

      <Button
        icons={<RightCircleOutlined />}
        block
        loading={isLoading}
        type='primary'
        onClick={handleClick}
      >
        Submit
      </Button>
    </div>
  );
}

export default App;
