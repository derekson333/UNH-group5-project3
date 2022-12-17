import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ANIMAL } from "../../utils/queries";
import Application from "../Application";

export default function Animal() {
  const { id } = useParams();
  const { loading, data } = useQuery(QUERY_ANIMAL, {
    variables: { animalId: id },
  });
  const animal = data?.animal || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="container selected-animal">
        <div
          key={animal._id}
          className="card animal selected-animal"
          style={{ maxWidth: "70%", maxHeight: "", margin: "20px" }}
        >
          <div className="animal-card card text-center">
            <img
              alt="an adoptable pet"
              className="card-img-top w-100 d-block animalcardimg"
              src={animal.imgUrl}
            ></img>
            <div className="card-body">
              <h4 className="card-title">{animal.name}</h4>
              <p className="card-text" style={{ marginBottom: "5px" }}>
                Type:{" "}
                {animal.animalType[0].toUpperCase() +
                  animal.animalType.substring(1)}
              </p>
              <p className="card-text" style={{ marginBottom: "5px" }}>
                Age: {animal.age}
              </p>
              <p className="card-text" style={{ marginBottom: "5px" }}>
                Sex: {animal.sex[0].toUpperCase() + animal.sex.substring(1)}
              </p>
              <p className="card-text" style={{ marginBottom: "15px" }}>
                Breed: {animal.breed}
              </p>
              <p className="card-text" style={{ marginBottom: "15px" }}>
                Family Friendly: {animal.familyFriendly ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
        <Application style={{ float: "right" }} name={animal.name} />
      </div>
    </>
  );
}
