import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* max-width: 600px; */
  padding: 10px;
  background: #000;
  color: white;

  overflow: auto;

  .search {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    margin: 10px;
    border: none;
    height: 40px;

    position: relative;
  }
  .search .icon {
    position: absolute;
    right: 10px;
    top: 9px;
  }
  .search input {
    height: 35px;
    padding-left: 5px;
    font-size: 20px;
    border: none;
    border-radius: 25px;
    background: linear-gradient(to right, blue, purple, pink);
  }

  .UsersContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    border: 1px solid red;
  }
  img {
    width: 50px;
    border-radius: 50%;
  }

  .names {
    margin-left: 5px;
  }

  .dataUsers {
    display: flex;
    justify-content: left;
    align-items: center;

    padding: 8px;
    border: 1px solid red;
  }
`;
