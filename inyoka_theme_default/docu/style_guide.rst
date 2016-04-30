.. .. _coding_style_guide:

==================
Coding Style Guide
==================

General
=======

::

> "Part of being a good steward to a successful project is realizing that
> writing code for yourself is a Bad Idea™. If thousands of people are using
> your code, then write your code for maximum clarity, not your personal
> preference of how to get clever within the spec." - Idan Gazit

* Don't try to prematurely optimize your code; keep it readable and
  understandable.
* All code in any code-base should look like a single person typed it, even
  when many people are contributing to it.
* Strictly enforce the agreed-upon style.
* If in doubt when deciding upon a style use existing, common patterns.

Indentation
***********

for CSS, JS and HTML

 * only use spaces
 * use 2 spaces per indent

HTML
====

Naming schemes
**************

HTML elements should be set in lowercase and use the HTML-notation.

.. code-block::

  <br>    <!-- Okay -->
  <br/>   <!-- Not Okay -->
  <br />  <!-- Not Okay -->
  <BR>    <!-- Not Okay -->

CSS-ID should be named in lowerCamelCase.

.. code-block::

  <div id="pageContainer">

Classes should be in lower_case, with words separated by underscores.

.. code-block::

<div class="my_class_name">

Attribute values must be enclosed in double quotation marks.

.. code-block::

  <div class="my_class_name"><!-- Okay -->
  <div class=my_class_name><!-- Not Okay -->


 * Paragraphs of text should always be placed in a <p> tag. Never use multiple <br> tags.
 * Items in list form should always be in <ul>, <ol>, or <dl>. Never use a set of <div> or <p>.

 * generally, created HTML should be valid, f.e. check it with `<http://validator.w3.org/>`_


Whenever possible, avoid superfluous parent elements when writing HTML.
Many times this requires iteration and refactoring, but produces less
HTML. For example:

.. code-block::

    <!-- Not so great -->
    <span class="avatar">
      <img src="...">
    </span>

    <!-- Better -->
    <img class="avatar" src="...">

Jinja
=====

 * Put spaces around python-code::

  {{ my_function() }}
  instead of
  {{my_function()}}

.. code-block::

  <li>
    <a href="//example.org">example</a>
    {% if true %}
      <a href="//example.org">example#2</a>
    {% endif %}
  </li>

Translation
===========

There are multiple ways to mark strings for translation in templates.

One is

    _('example string')

or

    gettext('example string')

or another one

    {% trans %}example string{% endtrans %}

Where to use which?
*******************

Basically, `gettext()` does exactly the same as `_()`. The last one is
just a short name. It is appreciated to only use `_()`. Both are mainly
used in function calls or as parameters of macros, as {% trans %} cant
be used there. For example foo_macro(_('Sign in'))

In contrast, the third one is better for normal wrapped text in
templates. Theoretically, it is possible to use `{{ _('some text') }}`
instead of `{% trans %}some text{% endtrans %}`. So is there any
benefit of using `{% trans %}`? Yes, you can pass values via variables
into the string, which will be translated. That's pretty elegant. An example:

    {% trans name=user.username %}
      Attention: You are currently editing “{{ name }}”.
    {% endtrans %}

LESS
====

?? order of less properties
?? usage of import


from https://github.com/styleguide/css

 * spaces before { in rule declarations
 * line breaks between rulesets

structure sections with headings

.. code-block::

  /*
   * $Section
   */

Note $ for advanced searchability

LESS automatically compiled

from https://github.com/ginatrapani/ThinkUp/wiki/Code-Style-Guide:-CSS

validator http://jigsaw.w3.org/css-validator/

.. code-block::

  /* Comment about this selector block. */
  selector {
    property: value; /* Comment about this property-value pair. */
  }

lowercase for html-tags

.. code-block::

  div { /* Okay */
  DIV { /* Not okay */

.. code-block::

  a,.brand,h1,h2,h3,h4,h5,h6{
    color:#BADA55;
  }

.. code-block::

  h1,h2,h3,h4,h5,h6,
  ul,ol,dl,
  p,
  table,
  form,
  re,
  hr {
    margin-bottom: 1.5em;
  }

Sources of inspiration
======================

 * https://github.com/styleguide/templates
 * https://github.com/ginatrapani/ThinkUp/wiki/Code-Style-Guide%3A-HTML
 * https://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml


The idiomatic-css style-guide and `Google's one <https://code.google.com/p/google-styleguide/>`_
are licensed under `CC-BY 3.0 <http://creativecommons.org/licenses/by/3.0/>`_.
Thus, this style guide is licensed under the same conditions.
