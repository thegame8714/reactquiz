<?php
/**
 * File containing the ezcDocumentDocbookToRstSpecialParagraphHandler class.
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 * @package Document
 * @version //autogen//
 * @license http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 */

/**
 * Visit special paragraphs.
 *
 * Transform the paragraphs with special annotations like <note> and
 * <caution> to paragraphs inside the HTML document with a class
 * representing the meaning of the docbook elements. The mapping which is
 * used inside this method is used throughout the document comoponent and
 * compatible with the RTS mapping.
 *
 * @package Document
 * @version //autogen//
 */
class ezcDocumentDocbookToRstSpecialParagraphHandler extends ezcDocumentDocbookToRstBaseHandler
{
    /**
     * Handled paragraph names / types
     *
     * @var array
     */
    protected $types = array(
        'note'      => 'note',
        'tip'       => 'notice',
        'warning'   => 'warning',
        'important' => 'attention',
        'caution'   => 'danger',
    );

    /**
     * Handle a node
     *
     * Handle / transform a given node, and return the result of the
     * conversion.
     *
     * @param ezcDocumentElementVisitorConverter $converter
     * @param DOMElement $node
     * @param mixed $root
     * @return mixed
     */
    public function handle( ezcDocumentElementVisitorConverter $converter, DOMElement $node, $root )
    {
        $type = $this->types[$node->tagName];
        $content = $converter->visitChildren( $node, '' );
        $root .= $this->renderDirective( $type, '', array(), $content );
        return $root;
    }
}

?>
