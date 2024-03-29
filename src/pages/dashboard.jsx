import React, { useEffect } from "react";
import { DashboardLayout } from "../components/Layout";
import { useHistory } from "react-router-dom";

const DashboardPage = () => {
    const history = useHistory();

    const checkLogin = () => {
        const token = localStorage.getItem("token");
        if (token === null) {
            history.push({
                pathname: "/login",
            });
        }
    };

    useEffect(() => {
        checkLogin();
    });

    return (
        <DashboardLayout>
            <div className="row px-4 pb-4">
                <div className="col-lg-4 px-2 pt-2">
                    <div className="card bg-light bg-gradient shadow-lg">
                        <div className="card-body">
                            <div className="card-title p-2">
                                <h5 className="h5 fw-bold">Leaves</h5>
                            </div>
                            <div className="card-subtitle p-2">
                                <h6 className="h6">
                                    View all the ongoing and upcoming leaves.
                                </h6>
                            </div>
                            <div className="text-right p-2">
                                <button
                                    className="btn btn-dark rounded-pill fw-bold"
                                    onClick={() => {
                                        history.push("/leaves");
                                    }}
                                >
                                    View Leaves
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 px-2 pt-2">
                    <div className="card bg-light bg-gradient shadow-lg">
                        <div className="card-body">
                            <div className="card-title p-2">
                                <h5 className="h5 fw-bold">Risks</h5>
                            </div>
                            <div className="card-subtitle p-2">
                                <h6 className="h6">
                                    View all the risks occurring due to leaves.
                                </h6>
                            </div>
                            <div className="text-right p-2">
                                <button
                                    className="btn btn-dark rounded-pill fw-bold"
                                    onClick={() => {
                                        history.push("/risks");
                                    }}
                                >
                                    View Risks
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 px-2 pt-2">
                    <div className="card bg-light bg-gradient shadow-lg">
                        <div className="card-body">
                            <div className="card-title p-2">
                                <h5 className="h5 fw-bold">Groups</h5>
                            </div>
                            <div className="card-subtitle p-2">
                                <h6 className="h6">
                                    Configure the work groups and their
                                    threshold.
                                </h6>
                            </div>
                            <div className="text-right p-2">
                                <button
                                    className="btn btn-dark rounded-pill fw-bold"
                                    onClick={() => {
                                        history.push("/groups");
                                    }}
                                >
                                    View Groups
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row px-4">
                <div className="border-top border-2 px-2"></div>
            </div>
            <div className="row p-4">
                <div className="col-lg-4 px-2 pb-2">
                    <div className="card bg-light bg-gradient shadow-lg">
                        <div className="card-body">
                            <div className="card-title p-2">
                                <h5 className="h5 fw-bold">Charts</h5>
                            </div>
                            <div className="card-subtitle p-2">
                                <h6 className="h6">
                                    View risks and resource charts.
                                </h6>
                            </div>
                            <div className="text-right p-2">
                                <button
                                    className="btn btn-dark rounded-pill fw-bold"
                                    onClick={() => {
                                        history.push("/charts");
                                    }}
                                >
                                    View Charts
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 px-2 pb-2">
                    <div className="card bg-light bg-gradient shadow-lg">
                        <div className="card-body">
                            <div className="card-title p-2">
                                <h5 className="h5 fw-bold">Settings</h5>
                            </div>
                            <div className="card-subtitle p-2">
                                <h6 className="h6">
                                    Check administrator's settings.
                                </h6>
                            </div>
                            <div className="text-right p-2">
                                <button
                                    className="btn btn-dark rounded-pill fw-bold"
                                    onClick={() => {
                                        history.push("/settings");
                                    }}
                                >
                                    View Settings
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 px-2 pb-2">
                    <div className="card bg-light bg-gradient shadow-lg">
                        <div className="card-body">
                            <div className="card-title p-2">
                                <h5 className="h5 fw-bold">About</h5>
                            </div>
                            <div className="card-subtitle p-2">
                                <h6 className="h6">
                                    Read about this application and guide.
                                </h6>
                            </div>
                            <div className="text-right p-2">
                                <button
                                    className="btn btn-dark rounded-pill fw-bold"
                                    onClick={() => {
                                        history.push("/about");
                                    }}
                                >
                                    Read About
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default DashboardPage;
