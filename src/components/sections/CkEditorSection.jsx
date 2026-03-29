const CkEditorSection = ({ block }) => {
  return (
    <article className="container sectionPadding">
      <div
        dangerouslySetInnerHTML={{ __html: block.content }}
        className="rich_content"
      />
    </article>
  );
};

export default CkEditorSection;
