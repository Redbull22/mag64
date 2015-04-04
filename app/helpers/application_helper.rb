module ApplicationHelper
  def Icon64(name)

    html_safe "
        <svg class='icon_svg'><use xlink:href='##{name}'/></svg>
    "
  end

  def html_safe(html)
    html.respond_to?(:html_safe) ? html.html_safe : html
  end
end
