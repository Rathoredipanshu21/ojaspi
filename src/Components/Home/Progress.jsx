// Progress.js
import React from 'react';
import './Progress.css';

const Progress = () => {
    return (
        <div className="progress-container">
            <h1 className="text-center my-5 progress-main-title">COLLECTIONS OF OVERDUE DEBTORS</h1>

            <div className="timeline">
                {/* Stage A */}
                <div className="timeline-item timeline-item-left">
                    <div className="timeline-marker marker-left">A</div>
                    <div className="timeline-content">
                        <h3>Balance Confirmation</h3>
                        <ul>
                            <li>Data Collection from Client</li>
                            <li>Meeting Vendors for Balance Confirmation</li>
                        </ul>
                    </div>
                </div>

                {/* Stage B */}
                <div className="timeline-item timeline-item-right">
                    <div className="timeline-marker marker-right">B</div>
                    <div className="timeline-content">
                        <h3>Reasoning for Withhold</h3>
                        <ul>
                            <li>Communicate &amp; Understand the reason for holding payment</li>
                        </ul>
                    </div>
                </div>

                {/* Stage C */}
                <div className="timeline-item timeline-item-left">
                    <div className="timeline-marker marker-left">C</div>
                    <div className="timeline-content">
                        <h3>Escalating Issues</h3>
                        <ul>
                            <li>Reporting the issue to clients of why payments is pending</li>
                        </ul>
                    </div>
                </div>

                {/* Stage D */}
                <div className="timeline-item timeline-item-right">
                    <div className="timeline-marker marker-right">D</div>
                    <div className="timeline-content">
                        <h3>Releasing Payment</h3>
                        <ul>
                            <li>Regular Visits &amp; Communications</li>
                            <li>Building Peer Pressure</li>
                            <li>Verifying if the payment is done partially or completely</li>
                            <li>Following up till the payment is cleared</li>
                        </ul>
                    </div>
                </div>

                {/* Stage E */}
                <div className="timeline-item timeline-item-left">
                    <div className="timeline-marker marker-left">E</div>
                    <div className="timeline-content">
                        <h3>Submitting MIS Report</h3>
                        <ul>
                            <li>Generating &amp; Reporting Management Information System of Clients</li>
                        </ul>
                    </div>
                </div>

                {/* Issue Resolved */}
                <div className="timeline-item timeline-item-resolved">
                    <div className="timeline-marker marker-resolved">Issue Resolved</div>
                    <div className="timeline-content resolved-content">
                        <p>The collection process has been successfully completed.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;
