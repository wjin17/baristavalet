import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Section1Photo from "../images/landing-photo-1.jpeg"

import DownloadPhoto from "../images/Download.svg"
import SetOrderPhoto from "../images/SetOrder.svg"
import DeliveryPhoto from "../images/Delivery.svg"
import DoorPhoto from "../images/Door.svg"
import BottlePhoto from "../images/BottleBG.svg"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section>
      <div className="flex flex-col md:flex-row md:min-h-hero">
        <div className="my-12 md:my-auto mx-auto text-center w-full md:w-2/5">
          <h2 className="font-extrabold mx-12 text-blue-700">
            Introducing a new app that brings you coffee in bed.
          </h2>
        </div>
        <div
          className="bg-cover bg-center bg-center w-full md:w-3/5"
          style={{
            backgroundImage: `url(${Section1Photo})`,
            minHeight: "40vh",
          }}
        ></div>
      </div>
    </section>
    <section className="bg-yellow-100 py-16 md:py-20">
      <div className="flex flex-col md:flex-row justify-center py-16">
        <div className="md:max-w-md mx-auto md:mx-0 px-10">
          <h2 className="font-extrabold text-pink-700">
            Getting perfect coffee should be{" "}
            <span className="underline">easy</span>
          </h2>
          <p className="mt-6 text-gray-500 text-2xl">
            Wake up to the perfect cup of coffee prepared exactly the way you
            like right outside your door
          </p>
        </div>
        <div className="mx-auto md:mx-0 mt-10 md:mt-0 max-w-xs md:w-50">
          <img className="mx-auto my-auto md:mr-auto" src={DoorPhoto} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center py-16">
        <div className="md:max-w-md mx-auto md:mx-0 px-10 md:order-2">
          <h2 className="font-extrabold text-green-700">We believe in</h2>
          <p className="mt-6 text-gray-500 text-2xl">
            Making the <span className="underline"> best</span> coffee possible
          </p>
          <p className="mt-1 text-gray-500 text-2xl">
            <span className="underline">No</span> delivery fees
          </p>
          <p className="mt-1 text-gray-500 text-2xl">
            <span className="underline">Reducing</span> waste with reusable
            bottles
          </p>
        </div>
        <div className="mx-auto md:mx-0 mt-10 md:mt-0 max-w-xs md:w-50 md:order-1">
          <img className="mx-auto my-auto md:mr-auto" src={BottlePhoto} />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
/**
 * <div className="flex flex-col justify-center md:flex-row">
        <div className="my-12 md:my-auto w-96">
          <h2 className="font-extrabold mx-12">1. Download the app</h2>
        </div>
        <div>
          <div className="flex h-full">
            <img
              className="mx-auto my-auto h-1/2 w-1/3 md:w-auto"
              src={DownloadPhoto}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="my-12 md:my-auto w-96">
          <h2 className="font-extrabold mx-12">2. Set your standard order</h2>
        </div>
        <div>
          <div className="flex h-full">
            <img
              className="mx-auto my-auto h-1/2 w-2/3 md:w-auto"
              src={SetOrderPhoto}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="my-12 md:my-auto w-96">
          <h2 className="font-extrabold mx-12">
            3. Receive delicious coffee delivered right to your door
          </h2>
        </div>
        <div>
          <div className="flex h-full">
            <img
              className="mx-auto my-auto h-1/2 w-2/3 md:w-auto"
              src={DeliveryPhoto}
            />
          </div>
        </div>
      </div>
 */
