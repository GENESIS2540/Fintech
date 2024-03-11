import React from "react";
import Header from "../../common/Header";
import { Card, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const Update = () => {
  return (
    <div>
      <Header title={"Update Credentials"} category={"Update Credentials"} />
      <div className="grid md:grid-cols-2 gap-[10px]">
        <Card>
          <p className="font-semibold text-18px]">Update Email</p>
          <hr className="my-[10px]"/>
          <form className="grid gap-[10px]">
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>New Email</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input type="email" placeholder="New Email" required />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Confirm New Email</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input type="email" placeholder="Confirm New Email" required />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Current Password</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input type="password" placeholder="Current password" required />
              <button
                type="submit"
                className="shadow-btn transition-all ease-in-out duration-500 mt-[10px] w-max font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white"
              >
                Save
              </button>
            </div>
          </form>
        </Card>
        <Card>
          <p className="font-semibold text-18px]">Update Password</p>
          <hr className="my-[10px]"/>
          <form className="grid gap-[10px]">
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Current password</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input type="password" placeholder="Current password" required />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>New password</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input type="password" placeholder="New password" required />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Confirm new password</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input
                type="password"
                placeholder="Confirm new password"
                required
              />
              <button
                type="submit"
                className="shadow-btn transition-all ease-in-out duration-500 mt-[10px] w-max font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white"
              >
                Save
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Update;
