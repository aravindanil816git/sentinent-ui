
const ConversationCanvas = ({conversationId} : {
  conversationId?: string;
}) => (
  <div style={{ height: "100%" }}>
    {conversationId}
  </div>
);

export default ConversationCanvas;