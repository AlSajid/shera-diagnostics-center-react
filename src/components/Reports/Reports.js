import React, { useEffect, useState } from 'react';

const Reports = () => {
    const [userReports, setReports] = useState([]);

    useEffect(() => {
        fetch('/data/history.json')
            .then(result => result.json())
            .then(data => setReports(data));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center">Your Reports</h2>
            <hr />
            <table className="table table-striped fs-6">
                <thead>
                    <tr>
                        <th className="py-1 fw-bolder fs-4" >Date</th>
                        <th className="py-1 fw-bolder fs-4" >Test</th>
                        <th className="py-1 fw-bolder fs-4" >Result</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userReports.map(report =>
                            <tr>
                                <td className="py-1">{report["Date"]}</td>
                                <td className="py-1">{report["Test"]}</td>
                                <td className="py-1">{report["Result"]}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Reports;