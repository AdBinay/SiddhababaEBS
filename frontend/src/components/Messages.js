import React from 'react';

const Message = () => {
  return (
    <section className="pad-2 pt-3 pb-5">
      <div className="container-fluid ui-tabs ui-corner-all ui-widget ui-widget-content" id="message">
        <div className="row">
          <div className="col-12">
            <div className="button-box">
              <ul role="tablist" className="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                <li role="tab" tabIndex="0" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active" aria-controls="message-from-principal-1" aria-labelledby="ui-id-1" aria-selected="true" aria-expanded="true">
                  <a href="#message-from-principal-1" role="presentation" tabIndex="-1" className="ui-tabs-anchor" id="ui-id-1">Message From The Principal</a>
                </li>
                {/* Other list items here */}
              </ul>
            </div>
          </div>
        </div>

        {/* Principal message */}
        <div className="row mt-5 ui-tabs-panel ui-corner-bottom ui-widget-content" id="message-from-principal-1" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="false" style={{ display: 'flex' }}>
          <div className="col-12 col-sm-4">
            <div className="principal-image-box">
              <img src="https://sebs.edu.np/uploads/welcome_messages/welcome_message_1525431284.jpg" alt="Principal-image" />
            </div>
            <h4>Yam Bahadur Rana</h4>
            <p className="text-uppercase letter-spacing">Principal</p>
          </div>
          <div className="col-12 col-sm-8">
            {/* Principal message content */}
            {/* ... */}
          </div>
        </div>

        {/* Chairperson message */}
        <div className="row mt-5 ui-tabs-panel ui-corner-bottom ui-widget-content" id="message-from-chairperson" aria-labelledby="ui-id-2" role="tabpanel" aria-hidden="true" style={{ display: 'none' }}>
          <div className="col-12 col-sm-4">
            <div className="principal-image-box">
              <img src="https://sebs.edu.np/uploads/welcome_messages/welcome_message_1525431239.JPG" alt="Principal-image" />
            </div>
            <h4>Ram Lal Shrestha</h4>
            <p className="text-uppercase letter-spacing">Chairperson</p>
          </div>
          <div className="col-12 col-sm-8">
            {/* Chairperson message content */}
            {/* ... */}
          </div>
        </div>

        {/* Managing Director message */}
        <div className="row mt-5 ui-tabs-panel ui-corner-bottom ui-widget-content" id="message-from-managing-director" aria-labelledby="ui-id-3" role="tabpanel" aria-hidden="true" style={{ display: 'none' }}>
          <div className="col-12 col-sm-4">
            <div className="principal-image-box">
              <img src="https://sebs.edu.np/uploads/welcome_messages/welcome_message_1525431259.JPG" alt="Principal-image" />
            </div>
            <h4>Babu Ram Khanal</h4>
            <p className="text-uppercase letter-spacing">Managing Director</p>
          </div>
          <div className="col-12 col-sm-8">
            {/* Managing Director message content */}
            {/* ... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
