import { Link, useNavigate } from "react-router-dom";
import Homeimg from "../assets/home.png";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import { useState } from "react";

function NewBeer() {
  const navigate = useNavigate();
  const [nameInput, setNameInput] = useState("");
  const [taglineInput, setTaglineInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [firstBrewedInput, setFirstBrewedInput] = useState("");
  const [brewersTipsInput, setBrewersTipsInput] = useState("");
  const [AttenuationLevelInput, setAttenuationLevelInput] = useState(0);
  const [contributedByInput, setContributedByInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (event) => setNameInput(event.target.value);
  const handleTaglineChange = (event) => setTaglineInput(event.target.value);
  const handleDescriptionChange = (event) =>
    setDescriptionInput(event.target.value);
  const handleFirstBrewedChange = (event) =>
    setFirstBrewedInput(event.target.value);
  const handleBrewersTipsChange = (event) =>
    setBrewersTipsInput(event.target.value);
  const handleAttenuationLevelChange = (event) =>
    setAttenuationLevelInput(event.target.value);
  const handleContributedByChange = (event) =>
    setContributedByInput(event.target.value);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        {
          name: nameInput,
          tagline: descriptionInput,
          description: descriptionInput,
          first_brewed: firstBrewedInput,
          brewers_tips: brewersTipsInput,
          attenuation_level: AttenuationLevelInput,
          contributed_by: contributedByInput,
        }
      );
      navigate("/beers");
    } catch (err) {
      navigate("/error");
    }
  };
  if (isLoading === true) {
    return (
      <div>
        <ClockLoader />
      </div>
    );
  }

  return (
    <div>
      <header>
        <Link className={"navbar"} to={"/"}>
          <img src={Homeimg} alt="home" height={"40"} />
        </Link>
      </header>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="title"
            onChange={handleNameChange}
            value={nameInput}
          />
          <br />
          <label htmlFor="tagline">Tagline:</label>
          <input
            type="text"
            name="tagline"
            onChange={handleTaglineChange}
            value={taglineInput}
          />
          <br />
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            name="description"
            onChange={handleDescriptionChange}
            value={descriptionInput}
          />
          <br />
          <label htmlFor="first_brewed">First Brewed: </label>
          <input
            value={firstBrewedInput}
            type="text"
            name="first_brewed"
            onChange={handleFirstBrewedChange}
          />
          <br />
          <label htmlFor="brewers_tips">Brewers tips:</label>
          <input
            value={brewersTipsInput}
            type="text"
            name="brewers_tips"
            onChange={handleBrewersTipsChange}
          />
          <br />
          <label htmlFor="attenuation_level">Attenuation level: </label>
          <input
            value={AttenuationLevelInput}
            type="number"
            name="attenuation_level"
            onChange={handleAttenuationLevelChange}
          />
          <br />
          <label htmlFor="contributed_by">Contributed by:</label>
          <input
            value={contributedByInput}
            type="text"
            name="contributed_by"
            onChange={handleContributedByChange}
          />
          <br />
          <button type="submit">Agregar</button>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
