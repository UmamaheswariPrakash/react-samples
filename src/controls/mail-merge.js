/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class MailMerge extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'~/Resources/demos/Report/mail-merge.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        In this demo, mail merge report is designed to envelope the employee details using list report item.
                    </p>
                    <ul>
                        <li>A <code>Detail</code> group is defined for a list, thereby it repeats each employee information in envelope
                            format.</li>
                        <li>To keep data in a single page, rectangle report item is used as a container with the KeepTogether property
                            as true.</li>
                        <li><a href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/compose-report/properties-panel/#set-expression"
                            target="_blank">Expression</a> is used to frame the employee details dynamically at run time.</li>
                    </ul>
                    <p>
                        You can print or export this report as PDF, Excel, Word, HTML, PowerPoint, or CSV format using the
                        <code> Print </code> and <code> Export </code>
                        options in Bold Report Viewer. The reports can be sent to the professional contacts in an organization in single
                        click.
                    </p>
                    <p>
                        Mail merge report designing steps can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/list/design-ssrs-rdl-report-using-list/"
                            target="_blank">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default MailMerge;